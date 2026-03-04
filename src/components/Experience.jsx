import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-12 animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <h2 className="section-title">{t.sections.experience}</h2>
      <div className="flex flex-col gap-8">
        {t.experience.map((exp, index) => (
          <div
            key={index}
            className="glass-panel p-8 transition-transform duration-300 hover:translate-x-2"
          >
            <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
              <h3 className="text-xl font-bold text-primary m-0">{exp.role}</h3>
              <span className="text-secondary text-sm font-semibold">
                {exp.duration}
              </span>
            </div>
            <div className="flex justify-between items-baseline mb-4">
              <h4 className="text-lg font-semibold text-[var(--text-main)] m-0">
                {exp.company}
              </h4>
              {exp.location && (
                <span className="text-[var(--text-muted)] text-sm italic">
                  {exp.location}
                </span>
              )}
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              {exp.description}
            </p>
            {exp.details && (
              <ul className="list-disc list-outside space-y-2 text-[var(--text-muted)] ml-6 mb-4">
                {exp.details.map((detail, dIdx) => {
                  const colonIndex = detail.indexOf(":");
                  if (colonIndex !== -1) {
                    const title = detail.substring(0, colonIndex);
                    const rest = detail.substring(colonIndex);
                    return (
                      <li key={dIdx} className="leading-relaxed">
                        <strong className="text-[var(--text-main)]">
                          {title}
                        </strong>
                        {rest}
                      </li>
                    );
                  }
                  return (
                    <li key={dIdx} className="leading-relaxed">
                      {detail}
                    </li>
                  );
                })}
              </ul>
            )}
            {exp.technologies && (
              <p className="text-[var(--text-main)] font-medium leading-relaxed mt-2 pt-4 border-t border-[var(--border-color)]">
                {t.pdfLabels.technicalEnvironment} <span className="font-normal text-[var(--text-muted)]">{exp.technologies}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
