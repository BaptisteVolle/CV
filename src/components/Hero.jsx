import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PrintableCV from "./PrintableCV";
import { experienceData } from "../data/experience";
import { educationData } from "../data/education";
import { skillsData } from "../data/skills";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-20 md:py-32 text-center animate-fade-in">
      <div className="glass-panel p-8 md:p-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
          Baptiste
        </h1>
        <p className="text-[var(--text-muted)] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Passionate software developer specializing in modern web and mobile
          applications. Building elegant and high-performance digital
          experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href="mailto:contact@example.com"
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            contact@example.com
          </a>
          <span className="text-[var(--text-muted)] hidden sm:inline">•</span>
          <a
            href="#"
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[var(--text-muted)] hidden sm:inline">•</span>
          <a
            href="#"
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {isClient && (
            <PDFDownloadLink
              document={
                <PrintableCV
                  experience={experienceData}
                  education={educationData}
                  skills={skillsData}
                />
              }
              fileName="Baptiste_CV.pdf"
              className="btn btn-primary"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Generating Document..." : "Download PDF"
              }
            </PDFDownloadLink>
          )}
          <a
            href="#experience"
            className="btn glass-panel text-[var(--text-main)] hover:bg-[var(--surface-hover)]"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
}
