import React, { useState } from "react";
import { reviewsData, salonInfo } from "../data/salonData";
import { Star, CheckCircle, MessageSquare, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const displayedReviews = reviewsData.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section id="avis" className="py-16 lg:py-24 bg-[#FAF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F3E7DC] border border-[#DFCBB9] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8C5E3C] uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#B8860B] text-[#B8860B]" />
            <span>Témoignages Clients</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#201A17]">
            Une Note Parfaite de 5.0 / 5 sur Google
          </h2>
          <p className="text-sm sm:text-base text-[#61534C] leading-relaxed">
            La plus belle récompense est la fidélité de nos clientes d'Agadir et d'ailleurs. Découvrez leurs retours d'expérience en toute transparence.
          </p>
        </div>

        {/* Rating Scorecard Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DBD0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-[#FBF5EE] border border-[#E8DACB] flex flex-col items-center justify-center text-center">
              <span className="font-serif-luxury font-bold text-3xl text-[#28211D]">5.0</span>
              <div className="flex text-amber-400 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h3 className="font-serif-luxury font-bold text-lg text-[#251E1A]">
                  Avis Vérifiés Google
                </h3>
                <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-200">
                  100% Positif
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#736359] mt-0.5">
                Sur la base de <strong>{salonInfo.reviewCount} avis Google</strong> vérifiés.
              </p>
              <div className="flex items-center gap-3 text-xs text-[#8C7A70] mt-1.5">
                <span>✓ Précision & Hygiène</span>
                <span>•</span>
                <span>✓ Tenue 4 semaines</span>
                <span>•</span>
                <span>✓ Accueil chaleureux</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2A231F] hover:bg-[#B8860B] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#E8C872]" />
              <span>Consulter sur Google Maps</span>
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 text-left">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between relative bg-white"
            >
              {/* Quote icon watermark */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-[#EFE4DC] pointer-events-none" />

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#EADCCE]"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-[#251E1A] flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      {rev.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" title="Avis vérifié" />
                      )}
                    </h4>
                    <span className="text-[11px] text-[#8C7A70]">{rev.city} • {rev.date}</span>
                  </div>
                </div>

                {/* Stars & Service Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#8C5E3C] bg-[#FAF2EB] border border-[#E9DACF] px-2 py-0.5 rounded-full">
                    {rev.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#5B4E47] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Bottom Reassurance */}
              <div className="mt-5 pt-3 border-t border-[#F2E8DF] flex items-center justify-between text-[11px] text-[#8C7B71]">
                <span>Prestation certifiée</span>
                <span className="font-semibold text-emerald-700">Recommandé à 100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`p-2 rounded-full border ${
                currentPage === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-[#C5B4A5] text-[#3D322B] hover:bg-[#F3E7DC]"
              }`}
              aria-label="Avis précédents"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === idx ? "bg-[#B8860B] w-6" : "bg-[#D8C7B9]"
                  }`}
                  aria-label={`Page ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-full border ${
                currentPage === totalPages - 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-[#C5B4A5] text-[#3D322B] hover:bg-[#F3E7DC]"
              }`}
              aria-label="Avis suivants"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}