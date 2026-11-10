import React from "react";
import { salonInfo } from "../data/salonData";
import { Star, MessageCircle, Sparkles, Clock, MapPin, ShieldCheck, ArrowRight, Heart } from "lucide-react";

export default function Hero({ onOpenBooking }) {
  return (
    <section id="accueil" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#F3D7C6]/40 blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-[#EBD5B3]/35 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 bg-[#FAF1E8] border border-[#DFC8B5] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#8C5E3C] shadow-xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[#362B25] font-bold">5.0 / 5</span>
                <span className="text-[#7A6B62]">(46 avis Google)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/80 border border-[#E8DDD4] px-3 py-1.5 rounded-full text-xs font-medium text-[#5A4D45]">
                <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Quartier Al Wifaq, Agadir</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#201A18] leading-[1.18] tracking-tight">
              Sublimez vos mains et pieds chez{" "}
              <span className="gold-text-gradient italic">Aina Nails</span> Agadir
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A4E47] max-w-2xl leading-relaxed">
              Un savoir-faire d'exception pour un soin des ongles sur-mesure au cœur du{" "}
              <strong className="text-[#362B25] font-semibold">Quartier Al Wifaq</strong>. De la manucure russe de haute précision aux extensions d'ongles sculptés et Nail Art avant-gardiste.
            </p>

            {/* Value Highlights Pill List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#463B34] font-medium bg-[#FFFFFF]/70 p-2.5 rounded-xl border border-[#EDE2D8]">
                <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>7j/7 jusqu'à 22:00</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#463B34] font-medium bg-[#FFFFFF]/70 p-2.5 rounded-xl border border-[#EDE2D8]">
                <ShieldCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Stérilisation Autoclave</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#463B34] font-medium bg-[#FFFFFF]/70 p-2.5 rounded-xl border border-[#EDE2D8] col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Prestations 1h à 4h</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={salonInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E8C872] to-[#B8860B] text-[#1E1711] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-[#F6E6B8]"
              >
                <MessageCircle className="w-5 h-5 fill-[#1E1711]" />
                <span>Prendre Rendez-vous WhatsApp</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#382E28] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-[#D5C3B3] hover:border-[#B8860B] shadow-xs hover:shadow-sm transition-all"
              >
                <span>Découvrir nos Services</span>
                <ArrowRight className="w-4 h-4 text-[#B8860B]" />
              </a>
            </div>

            {/* Quick client reassurance footnote */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#7A6A61]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Ouvert aujourd'hui • Prise de rendez-vous rapide et sans attente</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#DFC399]/40 via-transparent to-[#F2D7C8]/50 blur-lg -z-10" />

              {/* Main Image Frame */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#EFE4DC]">
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=85"
                  alt="Aina Nails Agadir - Manucure Russe et Nail Art Haute Couture"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Dark gradient overlay for bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Bottom caption in image */}
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="inline-block bg-[#D4AF37] text-[#1E1711] text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full mb-1">
                    Signature Studio
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold leading-tight">
                    Manucure Russe & Nude Glazed
                  </h3>
                  <p className="text-xs text-white/90 mt-0.5">
                    Finition pure, cuticules nettes et éclat intemporel
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Google Rating (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#EBDDCF] flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-bold border border-amber-200">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 font-bold text-sm text-[#261E1A]">
                    <span>5.0 / 5.0</span>
                    <span className="text-[11px] font-normal text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono">100%</span>
                  </div>
                  <div className="text-[11px] text-[#786960]">46 avis certifiés Google</div>
                </div>
              </div>

              {/* Floating Card 2: Salon Highlight (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#2B231F] text-white p-3.5 rounded-2xl shadow-xl border border-[#483B33] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-xs sm:text-sm text-[#F7EFEB] flex items-center gap-1">
                    <span>Soins Personnalisés</span>
                    <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  </div>
                  <div className="text-[11px] text-[#C2B1A5]">Prestations de 1h à 4h de pur bien-être</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}