import React, { useState } from "react";
import { serviceCategories } from "../data/salonData";
import { Sparkles, Layers, Palette, HeartHandshake, Clock, Check, MessageCircle, ArrowRight } from "lucide-react";

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  const activeCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  const getIcon = (id) => {
    switch (id) {
      case "manucure":
        return <Sparkles className="w-4 h-4" />;
      case "extensions":
        return <Layers className="w-4 h-4" />;
      case "nailart":
        return <Palette className="w-4 h-4" />;
      case "pedicure":
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F3E7DC] border border-[#DFCBB9] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8C5E3C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Menu des Soins</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#201A17]">
            Catalogue de Prestations Haute Couture
          </h2>
          <p className="text-sm sm:text-base text-[#61534C] leading-relaxed">
            Chaque soin est pensé comme une expérience sur-mesure. Durée d'une prestation : de 1h à 4h selon le rituel choisi, pour une perfection absolue.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {serviceCategories.map((cat) => {
            const isSelected = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-[#29221E] text-[#F9F4F0] shadow-md scale-105"
                    : "bg-white text-[#52443C] hover:bg-[#F2E8DF] border border-[#E3D4C8]"
                }`}
              >
                <span className={isSelected ? "text-[#D4AF37]" : "text-[#8C7A70]"}>
                  {getIcon(cat.id)}
                </span>
                <span>{cat.shortTitle}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? "bg-[#3D332D] text-[#D4AF37]" : "bg-[#F3E9E0] text-[#705F55]"
                  }`}
                >
                  {cat.services.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Header */}
        <div className="mb-8 text-left bg-gradient-to-r from-white to-[#FDF8F5] p-5 sm:p-6 rounded-2xl border border-[#EBE0D7] shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#221B18] flex items-center gap-2.5">
              <span>{activeCategory.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#66574F] mt-1">
              {activeCategory.description}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#F7EFE9] border border-[#E5D7CA] text-[#8C5E3C] text-xs font-semibold px-3 py-1.5 rounded-full shrink-0">
            <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Séances de 1h à 4h</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {activeCategory.services.map((service) => (
            <div
              key={service.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between text-left group hover:border-[#D4AF37]/50"
            >
              <div>
                {/* Header Tag & Price */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9F1EA] text-[#8C5E3C] border border-[#E6D8CB] px-2.5 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                  <div className="text-right">
                    <span className="font-serif-luxury font-bold text-lg text-[#251E1A] text-[#B8860B]">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Service Name */}
                <h4 className="font-serif-luxury text-lg font-bold text-[#221B18] group-hover:text-[#B8860B] transition-colors leading-snug">
                  {service.name}
                </h4>

                {/* Duration indicator */}
                <div className="flex items-center gap-1.5 text-xs text-[#7A6B62] font-medium my-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Durée : {service.duration}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5B4F48] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-3 border-t border-[#F2E8DF] mb-6">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#63554D]">
                      <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service)}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#2E2520] hover:bg-[#B8860B] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-xs group-hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#E8C872]" />
                <span>Réserver ce soin</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom request notice */}
        <div className="mt-12 text-center p-6 bg-[#FFFFFF]/80 rounded-2xl border border-[#E7DDD4] max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#61524A]">
            ✨ <strong className="text-[#2C231F]">Un modèle particulier en tête ?</strong> Envoyez-nous simplement une photo d'inspiration via WhatsApp et notre prothésiste vous confirmera la faisabilité et le devis exact.
          </p>
        </div>

      </div>
    </section>
  );
}