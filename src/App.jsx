import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <div className="container">
      <Hero />
      <Experience />
      <Skills />
      <Education />

      <footer
        style={{
          textAlign: "center",
          padding: "3rem 0",
          color: "var(--text-muted)",
          borderTop: "1px solid var(--border-color)",
          marginTop: "2rem",
        }}
      >
        <p>© {new Date().getFullYear()} Baptiste. All rights reserved.</p>
        <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
          Built with React, Vite & Vanilla CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
