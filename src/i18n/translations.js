export const translations = {
  en: {
    // Hero
    hero: {
      tagline:
        "Frontend-leaning Full Stack developer with 7 years' experience. Built high-performance business UIs and real-time dashboards (1M+ points), optimizing UI/API for industrial and aerospace systems.",
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

    skills: [
      {
        category: "Frontend",
        items: [
          "Angular",
          "TypeScript",
          "SciChart",
          "GridStack",
          "Kendo",
          "Google Apps Scripts",
        ],
      },
      {
        category: "Backend & Data",
        items: [".NET", "C#", "PostgreSQL", "SQL Server", "SignalR"],
      },
      {
        category: "Workflow",
        items: ["Agile/Scrum", "Git", "Docker", "Jira"],
      },
    ],

    // Contact info
    contact: {
      phone: "+33 7 87 14 14 56",
      email: "[EMAIL_ADDRESS]",
      github: "github.com/BaptisteVolle",
      location: "Montpellier, France",
    },

    // Languages
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Professional" },
    ],
    interests: [
      "Sports (Padel, Table tennis)",
      "Video games",
      "Computing & new technologies",
      "Travel (Canada, Guatemala, Mediterranean)",
    ],

    // PDF specific labels
    pdfLabels: {
      subtitle: "Full Stack Developer",
      professionalExperience: "Professional Experience",
      technicalSkills: "Technical Skills",
      education: "Education",
      interests: "Interests",
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
        location: "MontrÃ©al, Canada",
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
        technologies:
          "Angular / C# / .NET / Typescript / HTML / CSS / TailwindCSS / SCSS / Kendo UI / Git / Jira / Figma",
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
        technologies:
          "JavaScript / Angular / .NET / Google Apps Script / SQL / Palantir Skywise / Git / Azure DevOps",
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
  },

  fr: {
    // Hero
    hero: {
      tagline:
        "Développeur Frontend avec 7 ans d'expérience à Toulouse & Montréal, Je conçois des interfaces robustes et performantes en plaçant la compréhension des besoins clients au cœur de mon développement pour offrir des solutions métier adaptées.",
      downloadPdf: "Telecharger le CV",
      generatingPdf: "Generation du PDF...",
      viewExperience: "Decouvrir mes projets",
      pdfFilename: "Baptiste_Volle_CV.pdf",
    },
    // Section titles
    sections: {
      experience: "Experience",
      skills: "Competences",
      education: "Formation",
    },
    // Footer
    footer: {
      builtWith: "Developpé avec React, Vite & Tailwind CSS",
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
      location: "Montpellier, France",
    },
    // Languages
    languages: [
      { name: "Francais", level: "Natif" },
      { name: "Anglais", level: "Professionnel" },
    ],
    interests: [
      "Sport (Padel)",
      "Jeux vidéo et Jeux de société",
      "Nouvelles technologies",
      "Voyages (Canada, Europe)",
    ],
    // PDF specific labels
    pdfLabels: {
      subtitle: "Développeur Frontend, 7 ans d'expérience",
      experienceDuration: "7 ans d'expérience",
      professionalExperience: "Parcours Professionnel",
      technicalSkills: "Compétences Techniques",
      education: "Formation",
      interests: "Centres d'intérêts",
      languages: "Langues",
      contact: "Contact",
      technicalEnvironment: "Environnement technique :",
    },
    skills: [
      {
        category: "Frontend",
        items: ["Angular", "TypeScript", "Kendo UI", "SciChart", "GridStack"],
      },
      {
        category: "Backend & Data",
        items: [".NET", "C#", "SignalR", "PostgreSQL", "SQL Server"],
      },
      {
        category: "Workflow",
        items: ["Agile", "Git", "Docker", "Jira"],
      },
    ],
    // Experience data
    experience: [
      {
        role: "Développeur Frontend",
        company: "Strato Automation",
        duration: "2024 - 2026",
        location: "Montreal, Canada",
        description:
          "Développement de la plateforme OCN (serveur Linux embarqué sous Docker) au sein d'une petite équipe R&D. J'ai porté l'essentiel des évolutions frontend récentes, de la conception produit/UX à l'implémentation, pour centraliser l'intégration des systèmes CVC et optimiser l'efficacité énergétique des bâtiments.",
        details: [
          "Référent frontend sur l'application web : design et conception des interfaces, choix techniques et implémentation de la majorité des fonctionnalités.",
          "Implémentation de mécanismes de communication avec des équipements industriels via protocoles BACnet IP/MSTP (découverte, synchronisation des données).",
          "Gestion du cycle de vie des équipements embarqués : configuration applicative, maintenance et mise à jour firmware.",
          "Développement d'interfaces en temps réel (dashboards, graphiques, alarmes) permettant une analyse rapide et continue de l'état du réseau et des équipements.",
          "Refactoring de l'architecture en parallèle de la maintenance évolutive afin de préparer l'intégration de fonctionnalités Cloud et IoT (device twin, offline mode).",
          "Intégration d'outils d'analyse et diagnostic du trafic réseau (Wireshark) et de simulation de scénarios (Node-Red) à l'aide de containers Docker.",
          "Mise en place et validation sur bancs de test locaux : équipements industriels, câblage réseau, serveur Linux embarqué et scénarios proches des conditions réelles.",
          "Amélioration des processus R&D par l'intégration d'outils IA (Cursor, CodeRabbit).",
        ],
        technologies:
          "Angular /  C# / .NET / Docker / Git / SignalR / SciChart / RxJS / Jira ",
      },
      {
        role: "Developpeur Full Stack (Consultant)",
        company: "Alten Sud Ouest",
        duration: "2019 - 2024",
        location: "Toulouse, France",
        description:
          "Réalisation de missions au sein de plusieurs départements d’Airbus, dans les domaines de la qualité des essais, du suivi de production et de l’intégration système au bureau d’étude.",
        details: [
          "Conception et maintien pendant 3 ans (du PoC au dépoiement) d'un outil de gestion des plannings de développement des systèmes avions via SVG (Google Apps Scripts, D3.js).",
          "Création automatique de rapport KPI.",
          "Developpement d'un outil de classification des non-conformités sur les avions de production (SQL, Skywise, HTML, Javascript).",
          "Développement d'un outil de suivi des reprises d'essais (Angular/.NET/ SQL Server).",
        ],
        technologies:
          "Angular / .NET (C#) / SQL Server / Google Apps Script / D3.js / Git ",
      },
    ],
    // Education data
    education: {
      degree: "Master + Licence Informatique (AIGLE)",
      school: "Université de\nMontpellier",
      duration: "2014 - 2019",
      description: "Architecture et Ingénierie des Logiciels et du Web.",
    },
  },
};

export default translations;
