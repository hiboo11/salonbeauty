import React, { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { salonInfo } from "../data/salonData";

export default function FloatingWhatsApp({ onOpenBooking }) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show subtle tooltip after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="mb-3 bg-white text-[#2B231F] p-3 rounded-2xl shadow-xl border border-[#E3D3C5] max-w-[240px] text-left relative animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1 text-[11px] font-bold text-[#B8860B] mb-0.5">
            <Sparkles className="w-3 h-3" />
            <span>Aina Nails Agadir</span>
          </div>
          <p className="text-xs text-[#52443C] leading-snug">
            Envie de sublimer vos ongles ? Réservez votre créneau en un clic sur WhatsApp !
          </p>
          <div className="mt-2 flex items-center justify-between text-[10px] text-emerald-700 font-semibold">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Réponse rapide 7j/7
            </span>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={salonInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 focus:outline-none"
        aria-label="Contacter sur WhatsApp"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}