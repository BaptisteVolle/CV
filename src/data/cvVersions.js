const mergeObject = (base, override) => {
  if (!override) {
    return base;
  }

  return Object.entries(override).reduce(
    (merged, [key, value]) => ({
      ...merged,
      [key]:
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        typeof merged[key] === "object" &&
        !Array.isArray(merged[key])
          ? mergeObject(merged[key], value)
          : value,
    }),
    { ...base },
  );
};

const mergeExperienceByCompany = (experience = [], overrides = {}) =>
  experience.map((item) =>
    overrides[item.company] ? mergeObject(item, overrides[item.company]) : item,
  );

export const cvVersions = [
  {
    id: "base",
    label: "CV principal",
  },
  {
    id: "frontend-angular",
    label: "Frontend Angular",
    overrides: {
      fr: {
        pdfLabels: {
          subtitle: "Développeur Frontend Angular, 7 ans d'expérience",
        },
        contact: {
          location: "Montpellier, France",
        },
        experienceByCompany: {
          "Strato Automation": {
            role: "Développeur Frontend Angular",
          },
        },
      },
      en: {
        pdfLabels: {
          subtitle: "Angular Frontend Developer",
        },
        contact: {
          location: "Montpellier, France",
        },
        experienceByCompany: {
          "Strato Automation": {
            role: "Angular Frontend Developer",
          },
        },
      },
    },
  },
  {
    id: "fullstack",
    label: "Full Stack",
    overrides: {
      fr: {
        pdfLabels: {
          subtitle: "Développeur Full Stack orienté Frontend, 7 ans d'expérience",
        },
        experienceByCompany: {
          "Strato Automation": {
            role: "Développeur Full Stack orienté Frontend",
          },
          "Alten Sud Ouest": {
            role: "Développeur Full Stack",
          },
        },
      },
      en: {
        pdfLabels: {
          subtitle: "Frontend-leaning Full Stack Developer",
        },
        experienceByCompany: {
          "Strato Automation": {
            role: "Frontend-leaning Full Stack Developer",
          },
          "Alten Sud Ouest": {
            role: "Full Stack Developer",
          },
        },
      },
    },
  },
];

export const getCvVersion = (versionId) =>
  cvVersions.find((version) => version.id === versionId) || cvVersions[0];

export const applyCvVersion = (baseCv, language, versionId) => {
  const version = getCvVersion(versionId);
  const languageOverrides = version.overrides?.[language];

  if (!languageOverrides) {
    return baseCv;
  }

  const { experienceByCompany, ...cvOverrides } = languageOverrides;
  const mergedCv = mergeObject(baseCv, cvOverrides);

  return {
    ...mergedCv,
    experience: mergeExperienceByCompany(
      mergedCv.experience,
      experienceByCompany,
    ),
  };
};
