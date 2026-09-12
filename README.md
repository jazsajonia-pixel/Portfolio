# Jazz Sajonia Portfolio

A modern, responsive portfolio website for Jazz Sajonia - Web Developer & AI Automation Specialist. Built with cutting-edge technologies for performance, SEO, and stunning visual effects.

## 🚀 Features

- ✨ **Smooth Animations** - Framer Motion animations throughout the site
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **High Performance** - Optimized Next.js with SSR and SSG
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data
- 🎨 **Modern Design** - Tailwind CSS with custom color palette
- 🌙 **Dark Theme** - Eye-friendly dark mode design
- ♿ **Accessible** - WCAG compliant components
- 🔧 **AI Automation** - Built by someone who automates everything

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) - Flexible icon system
- **Font**: [Poppins](https://fonts.google.com/specimen/Poppins) - Modern sans-serif font
- **SEO**: [next-seo](https://github.com/garmeeh/next-seo) - SEO plugin for Next.js

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.jsx           # Root layout with sidebar
│   ├── page.jsx             # Home page
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── projects/
│   │   └── page.jsx         # Projects showcase
│   ├── services/
│   │   └── page.jsx         # Services offered
│   ├── about/
│   │   └── page.jsx         # About Jazz
│   └── contact/
│       └── page.jsx         # Contact form
├── components/
│   ├── Sidebar.jsx          # Left navigation with mobile menu
│   └── Marquee.jsx          # Animated tools carousel
└── lib/
    └── seo.js               # SEO configuration

public/                       # Static assets
.github/                      # GitHub configuration
├── copilot-instructions.md   # Development guidelines
```

## 🎨 Color Palette

- **Primary (Orange)**: `#f97316` - Main accent color
- **Dark**: `#0f1419` - Background
- **Dark 800**: `#1f2937` - Card backgrounds
- **Dark 700**: `#374151` - Borders and subtle elements

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Clone the repository**
   ```bash
   cd d:\WebSystems\Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## 🏗️ Build & Deployment

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 🎯 Pages Overview

### Home (`/`)
- Hero section with call-to-action buttons
- Animated tools marquee showing tech stack
- Featured projects preview
- Social links

### Projects (`/projects`)
- Grid layout of all projects
- Project descriptions and tech stack badges
- Links to live demos and GitHub repos

### Services (`/services`)
- 6 service cards with icons
- Web Development, AI Automation, APIs, Deployment, Security, Consulting
- Feature lists for each service

### About (`/about`)
- Personal introduction
- Journey and approach sections
- Skills grid with checkmarks
- Stats showing experience

### Contact (`/contact`)
- Contact form with validation
- Contact information cards
- Phone, email, and location
- Success message on form submission

## 🔍 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags for all pages
- ✅ Open Graph integration
- ✅ Twitter Card support
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Structured data ready

## 🎬 Animations

- Page transitions with fade and slide effects
- Smooth navigation interactions
- Hover effects on buttons and cards
- Marquee animation for tools carousel
- Staggered animations for list items
- Floating and scale effects

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔧 Customization

### Update Personal Info
Edit [src/lib/seo.js](src/lib/seo.js) for:
- Name and title
- Social links
- Contact email and phone

### Add New Projects
Edit [src/app/projects/page.jsx](src/app/projects/page.jsx) to add your projects

### Modify Colors
Update the Tailwind config in [tailwind.config.js](tailwind.config.js)

## 📞 Contact Information

Currently configured with placeholder contact info. Update these files:
- Email: [src/app/contact/page.jsx](src/app/contact/page.jsx)
- Social links: [src/app/page.jsx](src/app/page.jsx)
- SEO config: [src/lib/seo.js](src/lib/seo.js)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- GitHub Pages with `next export`
- Netlify with Next.js adapter
- AWS Amplify
- Any platform supporting Node.js

## 📝 License

This portfolio is created for Jazz Sajonia. All rights reserved.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Phosphor Icons for beautiful icons
- The open-source community

---

**Happy coding! 🎉**

Need help? Check the [development instructions](.github/copilot-instructions.md).
