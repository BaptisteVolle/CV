import React from "react";

const educationData = [
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
];

export default function Education() {
  return (
    <section
      className="section animate-fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      <h2 style={{ marginBottom: "3rem" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="glass-panel"
            style={{ padding: "2rem", borderLeft: "4px solid var(--accent)" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <h3 style={{ margin: 0, color: "var(--text-main)" }}>
                {edu.degree}
              </h3>
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {edu.duration}
              </span>
            </div>
            <h4
              style={{
                margin: 0,
                marginBottom: "1rem",
                color: "var(--text-muted)",
              }}
            >
              {edu.school}
            </h4>
            <p style={{ color: "var(--text-muted)" }}>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
