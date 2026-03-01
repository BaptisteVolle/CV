import React from "react";
import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section
      className="py-20 animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="glass-panel p-8 text-center">
            <h3 className="text-primary text-xl font-bold mb-6">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skillGroup.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border border-[var(--border-color)] text-sm text-[var(--text-main)] transition-colors duration-200 hover:bg-primary/20 hover:border-primary bg-black/5 dark:bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
