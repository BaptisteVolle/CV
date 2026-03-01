import React from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Jest", "AWS"] },
];

export default function Skills() {
  return (
    <section
      className="section animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <h2 style={{ marginBottom: "3rem" }}>Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {skills.map((skillGroup, index) => (
          <div key={index} className="glass-panel" style={{ padding: "2rem" }}>
            <h3
              style={{
                color: "var(--primary)",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              {skillGroup.category}
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              {skillGroup.items.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.9rem",
                    color: "var(--text-main)",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary-glow)";
                    e.currentTarget.style.borderColor = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "var(--border-color)";
                  }}
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
