export const defaultSEO = {
  titleTemplate: '%s | Jazz Sajonia Portfolio',
  description:
    'Portfolio of Jazz Sajonia: personal, academic, and practical web development projects, with developing experience in AI-assisted coding and workflow automation.',
  canonical: 'https://portfolio-chrono8.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-chrono8.vercel.app',
    siteName: 'Jazz Sajonia Portfolio',
    images: [],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};

export const pageSEO = {
  home: {
    title: 'Home',
    description:
      'Web development projects by Jazz Sajonia, including personal builds, university work, and practical exploration of AI-assisted development.',
  },
  projects: {
    title: 'Projects',
    description:
      'Selected personal and academic builds, with each project’s context, technologies, and Jazz Sajonia’s contribution clearly described.',
  },
  services: {
    title: 'Capability Areas',
    description:
      'Web development, API, AI, and workflow areas that Jazz Sajonia is building through projects and focused independent practice.',
  },
  about: {
    title: 'About',
    description:
      'Learn about Jazz Sajonia’s background, current skill levels, and approach to building and reviewing AI-assisted software.',
  },
  contact: {
    title: 'Contact',
    description:
      'Contact Jazz Sajonia directly by email to discuss a project or collaboration.',
  },
};

export const generateMetadata = (page) => {
  const pageData = pageSEO[page] || {};
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: ['Web Developer', 'React', 'Next.js', 'Portfolio', 'AI-assisted development'],
    openGraph: {
      ...defaultSEO.openGraph,
      title: `${pageData.title} | Jazz Sajonia`,
      description: pageData.description,
    },
  };
};
