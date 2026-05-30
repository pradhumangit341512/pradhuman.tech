export const personalInfo = {
  name: "Pradhuman Singh",
  title: "Full Stack Developer",
  tagline:
    "I build production-grade web platforms, SaaS products, and AI-powered applications that help businesses scale",
  location: "Jaipur, India",
  email: "singhpradhuman077@gmail.com",
  phone: "+91 9116346573",
  bio: "Full Stack Developer currently building digital products at Sarvaya — a digital agency delivering custom web solutions, AI automations, and SEO strategies for businesses worldwide. I've shipped real-estate CRMs handling thousands of leads, AI voice platforms processing sub-100ms responses, hospitality booking systems, and agency platforms serving clients across India, US, UK, and Australia. I care deeply about performance, clean architecture, and building things that actually move the needle for businesses.",
  resumeUrl: "#",
  social: {
    github: "https://github.com/pradhumangit341512",
    linkedin: "https://www.linkedin.com/in/singhpradhuman/",
    twitter: "https://twitter.com/pradhuman341512",
  },
};

export const skills = [
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "MongoDB", level: 88, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "Python", level: 78, category: "backend" },
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS / Vercel", level: 82, category: "tools" },
  { name: "WordPress / Elementor", level: 80, category: "tools" },
  { name: "Figma", level: 82, category: "design" },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Sarvaya",
    period: "2025 - Present",
    description:
      "Building production-grade web applications and AI automation solutions at a digital agency serving clients across India, US, UK, and Australia. Developing custom-coded websites, managing end-to-end project delivery, and implementing SEO & AEO strategies. Part of a team that has delivered 45+ projects with a 5.0-star client rating.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AI Automation", "SEO"],
  },
  {
    role: "Full Stack Developer",
    company: "Beyond Karma AI",
    period: "2025",
    description:
      "Contributed to building the web platform for an enterprise AI company specializing in voice AI and intelligent automation. Worked on the frontend architecture for their AI Medical Receptionist, speech-to-speech pipeline interfaces, and product marketing pages.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI/ML"],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    description:
      "Built custom websites and web applications for clients across real estate, hospitality, and tech industries. Delivered projects like Broker365 CRM, Ummed Haveli hotel website, and multiple business platforms from concept to production.",
    tech: ["React", "Node.js", "MongoDB", "WordPress", "Vercel"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Broker365",
    category: "SaaS",
    description:
      "An invite-only CRM platform built for Indian real estate brokerages. Features AI-powered lead routing, Kanban deal pipelines, WhatsApp Business integration, co-broking commission tracking, and team analytics dashboards — all with OTP-verified security and role-based access control.",
    image: "/projects/broker365.jpg",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB Atlas", "WhatsApp API"],
    liveUrl: "https://www.broker365.in",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Sarvaya",
    category: "Agency",
    description:
      "Full-service digital agency platform offering custom web development, AI automation workflows, and Answer Engine Optimization. Features a 24-hour emergency delivery system, client dashboard, and performance-optimized architecture serving clients across India, US, UK, and Australia.",
    image: "/projects/sarvaya.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Analytics", "SEO"],
    liveUrl: "https://www.sarvaya.in",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Beyond Karma AI",
    category: "AI Platform",
    description:
      "Enterprise AI platform delivering intelligent automation solutions powered by voice and conversational AI. Features an AI Medical Receptionist with HIPAA compliance, speech-to-speech pipeline with sub-100ms latency, and Kubernetes-orchestrated microservices architecture.",
    image: "/projects/beyondkarma.jpg",
    tech: ["Next.js", "React", "TypeScript", "AI/ML", "Kubernetes"],
    liveUrl: "https://beyondkarma.ai",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Ummed Haveli",
    category: "Hospitality",
    description:
      "Boutique heritage hotel website for a luxury property in Jaipur. Features an interactive room booking system with date pickers and availability checking, restaurant reservation integration, photo gallery, and a premium design reflecting the heritage aesthetic of the property.",
    image: "/projects/ummedhaveli.jpg",
    tech: ["WordPress", "Elementor", "WooCommerce", "Booking System", "SEO"],
    liveUrl: "https://ummedhaveli.com",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "AD Build Estate",
    category: "Real Estate",
    description:
      "Corporate website for a real estate development company. Built with a modern design system featuring responsive layouts, interactive property showcases, and optimized lead generation — designed to establish brand authority in the property market.",
    image: "/projects/adbuildestate.jpg",
    tech: ["Framer", "React", "CSS3", "Responsive Design"],
    liveUrl: "https://www.adbuildestate.com",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "MT Enterprises",
    category: "Business",
    description:
      "Service-oriented business website for an RO water purification company in Jaipur. Features service catalog with 6 categories, WhatsApp inquiry integration, customer testimonials, and location-based SEO — built with Next.js for fast server-side rendering.",
    image: "/projects/mtenterprises.jpg",
    tech: ["Next.js", "Tailwind CSS", "SEO", "WhatsApp API"],
    liveUrl: "https://mtenterprises.in",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Kaka's Egg Corner",
    category: "Food & Beverage",
    description:
      "Restaurant website for a popular egg-based food outlet. Features an interactive menu showcase, online ordering capabilities, location details, and a vibrant design that captures the brand's energetic personality.",
    image: "/projects/kakaseggcorner.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://kakaseggcorner-fsi7xm25e-pradhuman-singhs-projects-f70305c7.vercel.app",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "CertifyBridge",
    category: "EdTech",
    description:
      "EdTech platform that generates verified internship documentation for college students. Features automated document generation within 24 hours, online verification portal with unique certificate IDs, user dashboard, and Razorpay payment integration with tiered pricing.",
    image: "/projects/certifybridge.jpg",
    tech: ["Next.js", "TypeScript", "Razorpay", "Vercel", "Tailwind CSS"],
    liveUrl: "https://www.certifybridge.me",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 9,
    title: "Datrix",
    category: "AI Platform",
    description:
      "AI-powered data organization platform that transforms scattered files and emails into clean, visual dashboards. Features multi-source integration, intelligent automation for information management, and real-time data processing for knowledge workers.",
    image: "/projects/datrix.jpg",
    tech: ["Next.js", "React", "AI/ML", "Data Processing", "Webpack"],
    liveUrl: "https://datrix.app",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 10,
    title: "StackRift",
    category: "SaaS",
    description:
      "All-in-one freelance business management platform for creative agencies and studios. Features project tracking with Kanban/timeline views, branded invoicing, expense tracking, budget forecasting, and integrations with Slack, Asana, Zapier, and 9+ tools — trusted by 7,000+ users.",
    image: "/projects/stackrift.jpg",
    tech: ["Next.js", "React", "TypeScript", "SaaS", "Mobile Apps"],
    liveUrl: "https://stackrift.app",
    githubUrl: "#",
    featured: true,
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Building fast, scalable, and secure web applications using Next.js, React, Node.js, and modern frameworks — from SaaS platforms to corporate websites.",
    icon: "Code2",
  },
  {
    title: "AI Automation",
    description:
      "Implementing intelligent automation workflows, AI-powered tools, and conversational AI solutions that help businesses operate faster and smarter.",
    icon: "TrendingUp",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive, conversion-focused user experiences with pixel-perfect interfaces that look stunning and perform beautifully across all devices.",
    icon: "Layout",
  },
  {
    title: "SEO & AEO",
    description:
      "Optimizing your digital presence with data-driven SEO, Answer Engine Optimization, and Generative Engine Optimization strategies for maximum visibility.",
    icon: "Palette",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business, goals, target audience, and project requirements in detail.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description:
      "I create wireframes, design mockups, and a technical roadmap that aligns with your brand identity and business objectives.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Building your application with clean, production-grade code. Rigorous testing at every stage ensures rock-solid reliability.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description:
      "Deploying your project with performance optimization, SEO setup, analytics integration, and ongoing maintenance support.",
  },
];

export const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with Next.js, React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS. For CMS projects I use WordPress with custom themes. I deploy on Vercel, AWS, and traditional hosting platforms.",
  },
  {
    question: "Can you build a SaaS product from scratch?",
    answer:
      "Yes — I've built full SaaS platforms like Broker365, a CRM with multi-tenant architecture, role-based access, payment integrations, and real-time analytics. I handle everything from database design to deployment.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page or corporate website takes 1-2 weeks. A full web application takes 4-8 weeks. Complex SaaS platforms can take 2-3 months. At Sarvaya, we also offer a 24-hour emergency delivery for urgent launches.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. I offer ongoing maintenance, bug fixes, feature updates, and performance optimization. Most of my clients continue working with me long after the initial launch.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "I offer both fixed-price and hourly billing depending on project scope. After understanding your requirements, I provide a detailed proposal with transparent pricing and milestone-based delivery.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Yes. I frequently jump into existing projects — whether it's adding features, fixing performance issues, refactoring legacy code, or migrating to a modern stack.",
  },
];

export const defaultReviews = [
  {
    name: "Rohit Mehra",
    role: "Founder",
    company: "Broker365",
    message:
      "Pradhuman built our entire CRM platform from the ground up. The WhatsApp integration, lead management system, and analytics dashboard he delivered have completely transformed how our brokerages operate. Exceptional work.",
    rating: 5,
  },
  {
    name: "Dev Sharma",
    role: "CEO",
    company: "Sarvaya",
    message:
      "Having Pradhuman as our full stack developer has been a game-changer. He delivers production-grade code consistently, handles complex client requirements with ease, and is the backbone of our technical delivery.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Owner",
    company: "Ummed Haveli",
    message:
      "Pradhuman created a beautiful website for our heritage hotel that perfectly captures the luxury experience we offer. The booking system works flawlessly and our direct bookings have increased significantly.",
    rating: 5,
  },
];
