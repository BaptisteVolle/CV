export const translations = {
  en: {
    // Hero
    hero: {
      tagline:
        "Passionate software developer specializing in modern web and mobile applications. Building elegant and high-performance digital experiences.",
      downloadPdf: "Download PDF",
      generatingPdf: "Generating Document...",
      viewExperience: "View Experience",
      pdfFilename: "Baptiste_CV_EN.pdf",
    },

    // Section titles
    sections: {
      experience: "Experience",
      skills: "Skills",
      education: "Education",
    },

    // Footer
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with React, Vite & Tailwind CSS",
    },

    // Skills categories
    skillCategories: {
      Frontend: "Frontend",
      Backend: "Backend",
      Tools: "Tools",
    },

    // Contact info
    contact: {
      phone: "07 87 14 14 56",
      email: "[EMAIL_ADDRESS]",
      github: "github.com/BaptisteVolle",
      location: "Montpellier, France",
    },

    // Languages
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Professional" },
    ],

    // PDF specific labels
    pdfLabels: {
      subtitle: "Full Stack Developer",
      professionalExperience: "Professional Experience",
      technicalSkills: "Technical Skills",
      education: "Education",
      languages: "Languages",
      contact: "Contact",
      technicalEnvironment: "Technical Environment:",
    },

    // Experience data
    experience: [
      {
        role: "Frontend Developer",
        company: "Strato Automation",
        duration: "2024 - 2026",
        location: "Montréal, Canada",
        description:
          "Developed OCN, a centralized network management platform for smart buildings, simplifying the control of HVAC equipment and complex industrial protocols.",
        details: [
          "Lead Frontend Developer: Technical lead for the OCN platform, ensuring overall project architectural consistency.",
          "UI/UX Design & Execution: Designed and implemented the majority of the platform's interfaces, enjoying creative freedom with highly successful results and team feedback.",
          "Advanced Performance: Developed high-performance industrial dashboards visualizing 1M+ real-time data points using SciChart and GridStack.",
          "Bacnet Industrial Environment: Integrated complex network configurations (IP & MSTP), implementing device discovery and firmware update features.",
          "Full-Stack Synergy & stability: Collaborated closely with backend developers to optimize API endpoints and with QA teams via Jira to maintain high platform stability.",
          "Agile Leadership: Led bi-monthly backlog grooming and demos to validate designs and steer development priorities.",
        ],
        technologies: "Angular / C# / .NET / Typescript / HTML / CSS / TailwindCSS / SCSS / Kendo UI / Git / Jira / Figma",
      },
      {
        role: "Full Stack Developer",
        company: "Alten Sud Ouest",
        duration: "2019 - 2024",
        location: "Toulouse, France",
        description:
          "Consultant for AIRBUS on several critical projects, ranging from avionics planning systems to production data analysis.",
        details: [
          "Airbus Project (System Integration): Developed a Fullstack application (Google Apps Script, SQL) for creating and sharing avionics development schedules, including dynamic SVG visualizations.",
          "Airbus Project (Quality Sector): Designed a Frontend interface on the Skywise platform (Palantir) to classify production non-conformities using SQL and JavaScript.",
          "Airbus Project (Ground Tests): Fullstack development of a web tool for managing ground test reruns using .NET, Angular, and SQL Server. Authored technical specifications (BRD/ARD).",
          "Cross-functional: Mentored new team members and conducted regular client demos to validate requirements and steer development.",
        ],
        technologies: "JavaScript / Angular / .NET / Google Apps Script / SQL / Palantir Skywise / Git / Azure DevOps",
      },
    ],

    // Education data
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "University of Technology",
        duration: "2017 - 2019",
        description:
          "Specialized in Artificial Intelligence and Software Engineering. Graduated with Honors.",
      },
      {
        degree: "Bachelor of Science in Information Technology",
        school: "State University",
        duration: "2014 - 2017",
        description:
          "Minor in Mathematics. Active member of the Coding Club and Hackathon team.",
      },
    ],

    // Skills data
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      },
      { category: "Tools", items: ["Git", "Docker", "Figma", "Jest", "AWS"] },
    ],
  },

  fr: {
    // Hero
    hero: {
      tagline:
        "Développeur Full Stack avec 7 ans d’expérience, dont 2 ans à Montréal dans le secteur du bâtiment intelligent. Expert dans la création d'interfaces industrielles haute performance (.NET / Angular), je mets mon expertise internationale au service de projets innovants sur Montpellier et sa région.",
      downloadPdf: "Télécharger le CV",
      generatingPdf: "Génération du PDF...",
      viewExperience: "Découvrir mes projets",
      pdfFilename: "Baptiste_Volle_CV.pdf",
    },

    // Section titles
    sections: {
      experience: "Expérience",
      skills: "Compétences",
      education: "Formation",
    },

    // Footer
    footer: {
      builtWith: "Développé avec React, Vite & Tailwind CSS",
    },

    // Skills categories (kept in English as they are technical terms)
    skillCategories: {
      Frontend: "Frontend",
      Backend: "Backend",
      Tools: "Outils",
    },

    // Contact info
    contact: {
      phone: "07 87 14 14 56",
      email: "baptistevolle09@gmail.com",
      github: "github.com/BaptisteVolle",
    },

    // Languages
    languages: [
      { name: "Français", level: "Maternel" },
      { name: "Anglais", level: "Professionnel" },
    ],

    // PDF specific labels
    pdfLabels: {
      subtitle: "Développeur Full Stack Senior",
      experienceDuration: "7 ans d'expertise",
      professionalExperience: "Parcours Professionnel",
      technicalSkills: "Expertise Technique",
      education: "Cursus Académique",
      languages: "Langues",
      contact: "Contact",
      technicalEnvironment: "Stack technique :",
    },

    // Experience data
    experience: [
      {
        role: "Développeur Frontend Senior",
        company: "Strato Automation",
        duration: "2024 - 2026",
        location: "Montréal, Canada",
        description:
          "Architecture et développement de OCN, une plateforme SaaS de gestion pour Smart Buildings pilotant des réseaux CVC (HVAC) et protocoles industriels.",
        details: [
          "Pilotage de la stratégie frontend de la plateforme OCN avec un rôle de garant de la cohérence architecturale.",
          "Conception UI/UX centrée utilisateur pour des interfaces métiers complexes, augmentant significativement l'adoption du produit.",
          "Développement de dashboards haute performance visualisant plus d'un million de variables en temps réel (SciChart / GridStack).",
          "Intégration de réseaux Bacnet (IP & MSTP) et gestion automatisée des cycles de vie firmware des équipements industriels.",
          "Optimisation des flux API avec le backend et mise en place rigoureuse de standards QA pour garantir une stabilité critique.",
        ],
        technologies: "Angular / C# / .NET / Typescript / TailwindCSS / Kendo UI / Jira / Figma",
      },
      {
        role: "Développeur Full Stack (Consultant)",
        company: "Alten Sud Ouest (pour AIRBUS)",
        duration: "2019 - 2024",
        location: "Toulouse, France",
        description:
          "Intervention sur des systèmes critiques du secteur aéronautique : de la planification avionique à l'analyse de données de production.",
        details: [
          "Développement d'une application critique de pilotage des plannings de production pour systèmes avioniques avec visualisations SVG dynamiques.",
          "Création d'outils analytiques de classification des non-conformités de production sur la plateforme Big Data Skywise (Palantir).",
          "Développement Fullstack (.NET / Angular) d'un outil web de suivi des reprises d'essais pour les chaînes de montage.",
          "Accompagnement technique, formation des nouveaux arrivants, et animation des démonstrations clients lors des Sprint Reviews.",
        ],
        technologies: "Angular / .NET / JavaScript / SQL Server / Palantir Skywise / Azure DevOps",
      },
    ],  

    // Education data
    education: [
      {
        degree: "Master Informatique (AIGLE)",
        school: "Université de Montpellier",
        duration: "2017 - 2019",
        description:
          "Architecture et Ingénierie des Logiciels et du Web.",
      },
      {
        degree: "Licence Informatique",
        school: "Université de Montpellier",
        duration: "2014 - 2017",
        description: "Bases fondamentales : Algorithmique, Systèmes et Réseaux.",
      },
    ],
  

    // Skills data
    skills: [
      {
        category: "Frontend",
        items: ["Angular 17+", "TypeScript", "Kendo UI", "GridStack", "SciChart", "UI/UX Design"],
      },
      {
        category: "Backend",
        items: [".NET", "C#", "PostgreSQL",],
      },
      { category: "Outils", items: ["Git", "Docker", "Jira"] },
    ],
  },
};

export default translations;
