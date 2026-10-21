# Jazz Sajonia — Portfolio

A responsive portfolio site for presenting my software projects, the problems they explore, and the part I contributed to each. The project archive intentionally distinguishes personal work from academic group projects and explains my contribution instead of implying that every project was built solo.

## What’s on the site

- **Home:** introduction, selected work, and the tools I use across web, mobile, AI-assisted development, and automation experiments.
- **Project archive:** interactive project cards with context, technologies, contribution notes, quick views, and selected screenshots or short demos.
- **About and capability areas:** background and practical areas I am continuing to develop through project work.
- **Contact:** a small contact form that opens a pre-filled email in the visitor’s mail app; it does not submit to a server.
- **Presentation:** responsive layouts, light/dark themes, subtle motion, page metadata for sharing and search previews, plus a touch-friendly React Three Fiber constellation on the home page.

The archive currently highlights Chrono and MarketHub, alongside academic projects with their team context made explicit.

## Technology

- Next.js 14 App Router and React 18
- JavaScript (JSX)
- Tailwind CSS 3
- Framer Motion
- Three.js, React Three Fiber, and Drei for the interactive project constellation
- Phosphor React icons
- Next.js metadata and static export

## Run locally

### Requirements

- Node.js 18 or newer
- npm

```bash
git clone https://github.com/jazsajonia-pixel/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

Available scripts:

```bash
npm run dev      # start the local development server
npm run lint     # run the Next.js lint command
npm run build    # create the static production output in out/
```

The site is configured for static export through `next.config.js`. Deploy the generated `out/` directory to a static hosting provider.

## Project structure

```text
src/app/          Home, About, Projects, Services, Contact, and global styles
src/components/   Shared shell, navigation, theme, project previews, and 3D constellation
src/lib/          SEO metadata and database helper
public/projects/  Portfolio project screenshots and demo media
assets/           Local profile and supporting images
```

## Updating the portfolio

Project entries and their contribution notes live in `src/app/projects/page.jsx`; featured cards are in `src/app/page.jsx`. Keep screenshots and demo files under `public/projects/`, and use paths beginning with `/projects/` in the page data. For new academic or collaborative work, state the team context and my specific contribution clearly.
