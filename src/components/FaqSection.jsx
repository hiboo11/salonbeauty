import React, { useState } from "react";
import { faqData } from "../data/salonData";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-[#FAF5F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F3E7DC] border border-[#DFCBB9] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8C5E3C] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#201A17]">
            Tout Ce Que Vous Devez Savoir
          </h2>
          <p className="text-sm sm:text-base text-[#61534C] leading-relaxed">
            Pour une première visite en toute sérénité chez Aina Nails.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 text-left">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8DCD1] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF9F6] transition-colors focus:outline-none"
                >
                  <span className="font-serif-luxury font-bold text-base sm:text-lg text-[#251E1A] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F5EDE6] flex items-center justify-center text-[#B8860B] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#B8860B] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C4F47] leading-relaxed border-t border-[#F5EDE6] pt-3 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}