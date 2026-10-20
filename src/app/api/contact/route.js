export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  subject: 160,
  message: 5000,
};
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 4;
const rateTable = globalThis.__portfolioContactRateTable ?? new Map();
globalThis.__portfolioContactRateTable = rateTable;

function json(status, body) {
  return Response.json(body, { status });
}

function takeRateLimit(ip) {
  const now = Date.now();
  const previous = rateTable.get(ip);
  if (!previous || now - previous.startedAt >= RATE_WINDOW_MS) {
    rateTable.set(ip, { startedAt: now, count: 1 });
  } else if (previous.count >= RATE_LIMIT) {
    return false;
  } else {
    previous.count += 1;
  }

  if (rateTable.size > 5000) {
    for (const [key, value] of rateTable) {
      if (now - value.startedAt >= RATE_WINDOW_MS) rateTable.delete(key);
    }
  }
  return true;
}

function cleanField(value, maxLength) {
  if (typeof value !== 'string') return null;
  const cleaned = value.trim();
  if (!cleaned || cleaned.length > maxLength) return null;
  return cleaned;
}

export async function POST(request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return json(403, { error: 'Please submit this form from the portfolio site.' });
      }
    } catch {
      return json(403, { error: 'Please submit this form from the portfolio site.' });
    }
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 12_000) {
    return json(413, { error: 'Your message is too large. Please shorten it and try again.' });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'Please check the form and try again.' });
  }

  // Quietly accept automated honeypot submissions without sending mail.
  if (typeof body?.website === 'string' && body.website.trim()) {
    return json(200, { ok: true });
  }

  const name = cleanField(body?.name, MAX_LENGTHS.name);
  const email = cleanField(body?.email, MAX_LENGTHS.email);
  const subject = cleanField(body?.subject, MAX_LENGTHS.subject);
  const message = cleanField(body?.message, MAX_LENGTHS.message);
  if (!name || !email || !subject || !message) {
    return json(400, { error: 'Please complete each field and keep your message under 5,000 characters.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL || 'jaz.sajonia@gmail.com';
  if (!apiKey || !from) {
    return json(503, {
      error: 'Email delivery is not configured yet. Please email me directly instead.',
    });
  }

  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  if (!takeRateLimit(ip)) {
    return json(429, { error: 'Please wait a minute before sending another message.' });
  }

  const safeSubject = subject.replace(/[\r\n]+/g, ' ');
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${safeSubject}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `portfolio-contact-${crypto.randomUUID()}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio contact: ${safeSubject}`,
        text,
      }),
    });

    if (!response.ok) {
      // Do not log message contents, recipient data, or provider credentials.
      console.error('Portfolio contact email provider returned status', response.status);
      return json(502, { error: 'Email delivery failed. Please try again or email me directly.' });
    }
    return json(200, { ok: true });
  } catch {
    return json(502, { error: 'Email delivery failed. Please try again or email me directly.' });
  }
}
