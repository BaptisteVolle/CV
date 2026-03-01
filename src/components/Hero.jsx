import React from "react";

export default function Hero() {
  return (
    <section
      className="section animate-fade-in"
      style={{ textAlign: "center", paddingTop: "8rem" }}
    >
      <div
        className="glass-panel"
        style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}
      >
        <h1 style={{ marginBottom: "1rem" }}>Baptiste</h1>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.25rem",
            marginBottom: "2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
          }}
        >
          Passionate software developer specializing in modern web and mobile
          applications. Building elegant and high-performance digital
          experiences.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a
            href="/cv.pdf"
            download="Baptiste_CV.pdf"
            className="btn btn-primary"
          >
            Download CV
          </a>
          <a
            href="#experience"
            className="btn glass-panel"
            style={{
              color: "var(--text-main)",
              border: "1px solid var(--border-color)",
              background: "transparent",
            }}
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
}
