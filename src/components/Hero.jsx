import React, { useState, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PrintableCV from "./PrintableCV";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const { t } = useLanguage();
  const EMAIL_ADDRESS = "baptistevolle09@gmail.com";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-20 md:py-32 text-center animate-fade-in">
      <div className="glass-panel p-8 md:p-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
          Baptiste
        </h1>
        <p className="text-[var(--text-main)] text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.tagline}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            {EMAIL_ADDRESS}
          </a>
          <span className="text-[var(--text-muted)] hidden sm:inline">•</span>
          <a
            href="https://www.linkedin.com/in/baptiste-volle-011085155/"
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[var(--text-muted)] hidden sm:inline">•</span>
          <a
            href="https://github.com/BaptisteVolle"
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
                  experience={t.experience}
                  education={t.education}
                  languages={t.languages}
                  contact={t.contact}
                  labels={t.pdfLabels}
                  tagline={t.hero.tagline}
                />
              }
              fileName={t.hero.pdfFilename}
              className="btn btn-primary"
            >
              {({ blob, url, loading, error }) =>
                loading ? t.hero.generatingPdf : t.hero.downloadPdf
              }
            </PDFDownloadLink>
          )}
          <a
            href="#experience"
            className="btn glass-panel text-[var(--text-main)] hover:bg-[var(--surface-hover)]"
          >
            {t.hero.viewExperience}
          </a>
        </div>

        {/* Embedded PDF Viewer for live preview */}
        {isClient && (
          <div className="mt-16 w-full h-[800px] rounded-xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
            <PDFViewer width="100%" height="100%" className="border-none">
              <PrintableCV
                experience={t.experience}
                education={t.education}
                languages={t.languages}
                contact={t.contact}
                labels={t.pdfLabels}
                tagline={t.hero.tagline}
              />
            </PDFViewer>
          </div>
        )}
      </div>




      
    </section>
  );
}
