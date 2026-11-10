import React from "react";
import { whyChooseUs } from "../data/salonData";
import { Award, ShieldCheck, Sparkles, Palette, Gem, Clock, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap = {
    Award: Award,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Palette: Palette,
    Gem: Gem,
    Clock: Clock
  };

  return (
    <section id="pourquoi-nous" className="py-16 lg:py-24 bg-[#F5EDE6]/60 border-y border-[#EAE0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EFE3D7] border border-[#DFCBB9] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8C5E3C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>L'Excellence Aina Nails</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#241E1B]">
            Pourquoi Confier Vos Ongles à Notre Studio ?
          </h2>
          <p className="text-sm sm:text-base text-[#61534C] leading-relaxed">
            Nous conjuguons rigueur technique, hygiène de standard médical et sens artistique aiguisé pour vous offrir des mains et pieds irréprochables.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={feature.id}
                className="luxury-card p-7 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden group"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E8C872]/15 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

                <div className="space-y-4">
                  {/* Badge & Icon row */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#F7EFE9] border border-[#E2D2C4] flex items-center justify-center text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#8C5E3C] bg-[#FAF2EB] border border-[#E6D6C7] px-2.5 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#251E1A] group-hover:text-[#B8860B] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#A07A5E] mt-0.5">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#5B4E47] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom reassurance item */}
                <div className="pt-5 mt-4 border-t border-[#F0E6DE] flex items-center gap-1.5 text-xs text-[#7A6B62]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Protocole certifié & garanti</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DAD1] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#241E1B]">
              Une exigence sans compromis sur l'hygiène et votre confort
            </h4>
            <p className="text-xs sm:text-sm text-[#66574F]">
              Chaque cliente bénéficie d'une lime neuve, d'un sachet d'instruments stérilisés scellé et d'un accueil privatisé.
            </p>
          </div>
          <a
            href="https://wa.me/212681463564?text=Bonjour%20Aina%20Nails,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20prestations"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#28211D] hover:bg-[#3D332D] text-[#FAF5F0] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <span>Poser une question à l'équipe</span>
          </a>
        </div>

      </div>
    </section>
  );
}