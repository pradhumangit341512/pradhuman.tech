import { personalInfo, projects, skills, services, experiences } from "@/lib/data";

export default function JsonLd() {
  const siteUrl = "https://pradhuman.tech";

  // Person Schema — core identity for AEO/GEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [
      personalInfo.social.github,
      personalInfo.social.linkedin,
      personalInfo.social.twitter,
    ],
    knowsAbout: skills.map((s) => s.name),
    hasOccupation: experiences.map((exp) => ({
      "@type": "Occupation",
      name: exp.role,
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
    })),
    worksFor: {
      "@type": "Organization",
      name: "Sarvaya",
      url: "https://www.sarvaya.in",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "B.Tech Computer Science",
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.bio,
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en-US",
  };

  // Professional Service Schema — for GEO/AEO discovery
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: `${personalInfo.name} — Web Development Services`,
    description:
      "Full Stack Web Development, SaaS Development, AI-powered Applications, UI/UX Design, and SEO services by Pradhuman Singh.",
    url: siteUrl,
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: services.map((service, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: i + 1,
      })),
    },
    priceRange: "$$",
  };

  // Portfolio / Creative Work Schema — each project
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/#portfolio`,
    name: "Portfolio Projects by Pradhuman Singh",
    description:
      "Collection of 10+ production web applications built by Pradhuman Singh, including SaaS platforms, AI applications, real estate CRMs, and business websites.",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.liveUrl,
        creator: { "@id": `${siteUrl}/#person` },
        keywords: project.tech.join(", "),
        genre: project.category,
      },
    })),
  };

  // BreadcrumbList for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/#about` },
      { "@type": "ListItem", position: 3, name: "Projects", item: `${siteUrl}/#projects` },
      { "@type": "ListItem", position: 4, name: "Services", item: `${siteUrl}/#services` },
      { "@type": "ListItem", position: 5, name: "Reviews", item: `${siteUrl}/#reviews` },
      { "@type": "ListItem", position: 6, name: "Contact", item: `${siteUrl}/#contact` },
    ],
  };

  // FAQ Schema — direct answer engine optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Pradhuman Singh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pradhuman Singh is a Full Stack Developer from Jaipur, India, currently working at Sarvaya. He specializes in React, Next.js, TypeScript, Node.js, and MongoDB, and has built 10+ production web applications including SaaS platforms, AI-powered apps, and business websites for clients across India, US, UK, and Australia.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Pradhuman Singh work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pradhuman Singh works with React, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, Python, Docker, AWS, Vercel, WordPress, and Figma. He specializes in full-stack JavaScript/TypeScript development.",
        },
      },
      {
        "@type": "Question",
        name: "What projects has Pradhuman Singh built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pradhuman Singh has built Broker365 (real estate CRM SaaS), Beyond Karma AI (enterprise voice AI platform), Sarvaya (digital agency), Datrix (AI data platform), StackRift (freelance management SaaS), CertifyBridge (EdTech platform), Ummed Haveli (hotel website), AD Build Estate (real estate), MT Enterprises (business website), and Kaka's Egg Corner (restaurant website).",
        },
      },
      {
        "@type": "Question",
        name: "How can I hire Pradhuman Singh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can hire Pradhuman Singh by visiting his portfolio at pradhuman.tech and filling out the contact form, or by reaching out via email, phone, LinkedIn, or GitHub. He is available for full-time opportunities, freelance projects, and consulting.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Pradhuman Singh located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pradhuman Singh is based in Jaipur, Rajasthan, India. He works with clients globally including India, United States, United Kingdom, and Australia.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
