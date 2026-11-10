import React, { useState } from "react";
import { galleryItems } from "../data/salonData";
import { Sparkles, Eye, X, Heart, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: "all", label: "Toutes les Réalisations" },
    { id: "manucure", label: "Manucure & French" },
    { id: "extensions", label: "Gel Sculpté & Extensions" },
    { id: "nailart", label: "Nail Art & Glazed" },
    { id: "pedicure", label: "Soins Pédicure" },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="galerie" className="py-16 lg:py-24 bg-[#F5EDE6]/50 border-t border-[#EAE0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EFE3D7] border border-[#DFCBB9] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8C5E3C] uppercase tracking-wider">
            <InstagramIcon className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Galerie Réalisations</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#201A17]">
            Le Studio en Images
          </h2>
          <p className="text-sm sm:text-base text-[#61534C] leading-relaxed">
            Découvrez nos dernières créations : lignes épurées "Clean Girl", manucures russes haute définition, gels sculptés et rituels bien-être.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                filter === cat.id
                  ? "bg-[#28211D] text-white shadow-xs"
                  : "bg-white text-[#574941] hover:bg-[#F2E7DC] border border-[#E2D3C6]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Instagram Grid Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#E9DDD1] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-[#E5DAD1]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Tag pill in corner */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#F4EBE3] px-2.5 py-1 rounded-full border border-white/20">
                  {item.tag}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <span className="text-white font-serif-luxury font-bold text-sm sm:text-base leading-tight mb-1">
                  {item.title}
                </span>
                <p className="text-[11px] text-white/80 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center justify-between text-white/90 text-xs pt-1 border-t border-white/20">
                  <span className="flex items-center gap-1 text-[#E5C365]">
                    <Eye className="w-3.5 h-3.5" /> Agrandir
                  </span>
                  <Heart className="w-3.5 h-3.5 text-[#E2B2A2] fill-[#E2B2A2]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-[#FAF4EF] text-[#29221E] border border-[#D8C7B9] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-xs hover:shadow-sm transition-all"
          >
            <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
            <span>Suivre @ainanails.agadir sur Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#FAF5F0] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] bg-black overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] bg-[#F7EFE8] px-3 py-1 rounded-full border border-[#E9DACF]">
                  {selectedPhoto.tag}
                </span>
                <span className="text-xs text-[#7A6C63]">Aina Nails Studio Agadir</span>
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#231B18] mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-[#5D5048] mb-4">
                {selectedPhoto.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#EADBCE]">
                <a
                  href={`https://wa.me/212681463564?text=${encodeURIComponent(
                    `Bonjour Aina Nails ! J'adore cette création vue sur votre galerie : ${selectedPhoto.title}. Est-il possible de faire la même chose pour mon prochain rendez-vous ?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#1E1711] font-bold text-xs sm:text-sm py-2.5 rounded-full"
                >
                  Demander ce modèle sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}