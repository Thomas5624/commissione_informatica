"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col sm:flex-row items-center justify-between shadow-lg z-50">
      <p className="text-sm text-center sm:text-left mb-3 sm:mb-0">
        Questo sito utilizza i cookie per migliorare l'esperienza di navigazione. Cliccando su "Accetta", acconsenti all'uso dei cookie.
        <Link href="/privacy-policy" className="text-blue-400 hover:underline ml-1">
          Maggiori informazioni
        </Link>
      </p>
      <button
        onClick={handleAccept}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        Accetta
      </button>
    </div>
  );
}
