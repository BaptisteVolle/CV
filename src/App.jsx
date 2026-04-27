import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PrintableCV from "./components/PrintableCV";
import { useLanguage } from "./i18n/useLanguage";
import { applyCvVersion, cvVersions } from "./data/cvVersions";

function App() {
  const { language, t } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [cvVersion, setCvVersion] = useState(() => {
    return localStorage.getItem("cvVersion") || "base";
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("cvVersion", cvVersion);
  }, [cvVersion]);

  const cv = applyCvVersion(t, language, cvVersion);

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-100">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4">
        <div className="text-sm font-semibold text-slate-900">
          Baptiste Volle - CV
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <span className="font-medium">Version</span>
          <select
            className="h-9 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-500"
            value={cvVersion}
            onChange={(event) => setCvVersion(event.target.value)}
          >
            {cvVersions.map((version) => (
              <option key={version.id} value={version.id}>
                {version.label}
              </option>
            ))}
          </select>
        </label>
      </header>
      {isClient && (
        <main className="flex min-h-0 flex-1 items-center justify-center p-4">
          <div className="h-full w-full max-w-5xl overflow-hidden">
            <PDFViewer width="100%" height="100%" className="border-none">
              <PrintableCV
                experience={cv.experience}
                education={cv.education}
                interests={cv.interests || []}
                languages={cv.languages}
                contact={cv.contact}
                labels={cv.pdfLabels}
                skills={cv.skills || []}
                tagline={cv.hero.tagline}
              />
            </PDFViewer>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
