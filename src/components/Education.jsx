import React from "react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section
      className="py-20 animate-fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      <h2 className="section-title">Education</h2>
      <div className="flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="glass-panel p-8 border-l-4 border-l-accent"
          >
            <div className="flex flex-wrap justify-between items-center mb-2 gap-4">
              <h3 className="text-xl font-bold text-[var(--text-main)] m-0">
                {edu.degree}
              </h3>
              <span className="text-accent text-sm font-semibold">
                {edu.duration}
              </span>
            </div>
            <h4 className="text-lg font-semibold text-[var(--text-muted)] mb-4 m-0">
              {edu.school}
            </h4>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
