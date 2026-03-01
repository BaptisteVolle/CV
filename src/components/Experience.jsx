import React from "react";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <h2 className="section-title">Experience</h2>
      <div className="flex flex-col gap-8">
        {experienceData.map((exp, index) => (
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
            <h4 className="text-lg font-semibold text-[var(--text-main)] mb-4">
              {exp.company}
            </h4>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
