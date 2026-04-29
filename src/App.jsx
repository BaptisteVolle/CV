import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PrintableCV from "./components/PrintableCV";
import { useLanguage } from "./i18n/useLanguage";

function App() {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const cvDocument = (
    <PrintableCV
      experience={t.experience}
      education={t.education}
      interests={t.interests || []}
      languages={t.languages}
      contact={t.contact}
      labels={t.pdfLabels}
      skills={t.skills || []}
      tagline={t.hero.tagline}
    />
  );

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100 p-4">
      {isClient ? (
        <div className="h-full w-full max-w-5xl overflow-hidden">
          <PDFViewer width="100%" height="100%" className="border-none">
            {cvDocument}
          </PDFViewer>
        </div>
      ) : null}
    </div>
  );
}

export default App;
