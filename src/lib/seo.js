export const defaultSEO = {
  titleTemplate: '%s | Jazz Sajonia Portfolio',
  description:
    'Professional portfolio of Jazz Sajonia - Web Developer & AI Automation Specialist. Explore my projects, services, and expertise in web development and AI automation.',
  canonical: 'https://jazzxajonia.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jazzxajonia.com',
    siteName: 'Jazz Sajonia Portfolio',
    images: [
      {
        url: 'https://jazzxajonia.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jazz Sajonia Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@jazzxajonia',
    site: '@jazzxajonia',
    cardType: 'summary_large_image',
  },
};

export const pageSEO = {
  home: {
    title: 'Home',
    description:
      'Welcome to Jazz Sajonia portfolio - Web Developer & AI Automation Specialist. Discover my work and services.',
  },
  projects: {
    title: 'Projects',
    description:
      'Explore the projects I have built showcasing my expertise in web development and AI automation solutions.',
  },
  services: {
    title: 'Services',
    description:
      'Professional web development and AI automation services tailored to your business needs.',
  },
  about: {
    title: 'About',
    description:
      'Learn more about Jazz Sajonia - my background, skills, and passion for web development and AI.',
  },
  contact: {
    title: 'Contact',
    description:
      'Get in touch with Jazz Sajonia. Let\'s discuss your project or collaboration opportunities.',
  },
};

export const generateMetadata = (page) => {
  const pageData = pageSEO[page] || {};
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: [
      'Web Developer',
      'AI Automation',
      'React',
      'Next.js',
      'Full Stack Developer',
      'Portfolio',
    ],
    openGraph: {
      ...defaultSEO.openGraph,
      title: `${pageData.title} | Jazz Sajonia`,
      description: pageData.description,
    },
  };
};
