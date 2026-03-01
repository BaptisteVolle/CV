import React from "react";

const expData = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    duration: "2022 - Present",
    description:
      "Lead the frontend development of a modern analytics web application using React and TypeScript. Improved performance by 30%.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Inc",
    duration: "2019 - 2022",
    description:
      "Developed and maintained various web and mobile applications using React Native and Node.js. Integrated REST APIs and designed database schemas.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <h2 style={{ marginBottom: "3rem" }}>Experience</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {expData.map((exp, index) => (
          <div
            key={index}
            className="glass-panel"
            style={{
              padding: "2rem",
              transition: "transform var(--transition-normal)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateX(10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateX(0)")
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <h3 style={{ margin: 0, color: "var(--primary)" }}>{exp.role}</h3>
              <span
                style={{
                  color: "var(--secondary)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {exp.duration}
              </span>
            </div>
            <h4
              style={{
                margin: 0,
                marginBottom: "1rem",
                color: "var(--text-main)",
              }}
            >
              {exp.company}
            </h4>
            <p style={{ color: "var(--text-muted)" }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
