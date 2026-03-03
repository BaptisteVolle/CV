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
      linkedin: "linkedin.com/in/baptiste-volle-011085155",
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
        "Développeur passionné spécialisé dans les applications web et mobiles modernes. Je crée des expériences digitales élégantes et performantes.",
      downloadPdf: "Télécharger le PDF",
      generatingPdf: "Génération en cours...",
      viewExperience: "Voir l'expérience",
      pdfFilename: "Baptiste_CV_FR.pdf",
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
      linkedin: "linkedin.com/in/baptiste-volle-011085155",
      github: "github.com/BaptisteVolle",
      location: "Montpellier, France",
    },

    // Languages
    languages: [
      { name: "Français", level: "Maternel" },
      { name: "Anglais", level: "Professionnel" },
    ],

    // PDF specific labels
    pdfLabels: {
      subtitle: "Développeur Full Stack",
      professionalExperience: "Expérience Professionnelle",
      technicalSkills: "Compétences Techniques",
      education: "Formation",
      languages: "Langues",
      contact: "Contact",
    },

    // Experience data
    experience: [
      {
        role: "Développeur Frontend",
        company: "Strato Automation",
        duration: "2024 - 2026",
        location: "Montréal, Canada",
        description:
          "Développement de OCN, une plateforme centralisée de gestion de réseaux de bâtiments intelligents visant à simplifier le pilotage d'équipements CVC (HVAC) et de protocoles industriels complexes.",
        details: [
          "Design UI/UX & Conception : Responsable de la majorité des interfaces et du parcours utilisateur, avec une grande liberté de création et des retours très positifs de l'équipe.",
          "Techniques avancées & Performance : Visualisation de plus d'un million de points en temps réel via SciChart et GridStack pour des dashboards industriels haute performance.",
          "Expertise Bacnet : Intégration et configuration de réseaux complexes (IP & MSTP), incluant la découverte d'appareils et la mise à jour de Firmware.",
          "Collaboration Agile & QA : Travail en étroite synergie avec le Back-End pour optimiser les endpoints API et avec la QA pour assurer une stabilité maximale via Jira.",
          "Communication & Démos : Organisation de back-logs bi-mensuels et de démonstrations techniques pour valider les orientations de design et définir les priorités.",
        ],
      },
      {
        role: "Développeur Full Stack",
        company: "Alten Sud Ouest",
        duration: "2019 - 2024",
        location: "Toulouse, France",
        description:
          "Prestataire pour AIRBUS sur plusieurs projets critiques, allant de la gestion de plannings avioniques à l'analyse de données de production.",
        details: [
          "Mission Airbus (System Integration) : Développement d'une application Fullstack (Google Apps Script, SQL) pour la création et le partage de plannings de systèmes avioniques. Mise en place de visualisations SVG dynamiques.",
          "Mission Airbus (Qualité) : Conception d'une interface Frontend sur la plateforme Skywise (Palantir) pour classifier les non-conformités des avions en production via SQL et JavaScript.",
          "Mission Airbus (Essais au sol) : Développement d'un outil web de gestion des reprises d'essais (.NET, Angular, SQL Server). Rédaction des spécifications techniques (BRD/ARD) et modélisation de données.",
          "Transverse : Accompagnement, formation des nouveaux arrivants et démonstrations régulières aux clients pour validation des besoins.",
        ],
      },
    ],

    // Education data
    education: [
      {
        degree: "Master en Informatique",
        school: "Université de Montpellier",
        duration: "2017 - 2019",
        description:
          "Master en Architecture et Ingénierie des Logiciels et du Web à l'Université de Montpellier (AIGLE)",
      },
      {
        degree: "Licence en Informatique",
        school: "Université de Montpellier",
        duration: "2014 - 2017",
        description: "",
      },
    ],

    // Skills data
    skills: [
      {
        category: "Frontend",
        items: ["Angular", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
      },
      {
        category: "Backend",
        items: [".NET", "C#", "PostgreSQL", "MongoDB"],
      },
      { category: "Outils", items: ["Git", "Docker"] },
    ],
  },
};

export default translations;
