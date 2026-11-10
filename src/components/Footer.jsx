import React from "react";
import { salonInfo } from "../data/salonData";
import { MapPin, Phone, Clock, MessageCircle, Star, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#211A16] text-[#EFE4DC] pt-16 pb-12 border-t border-[#362C25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#382E27] text-left">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif-luxury text-3xl font-bold tracking-[0.2em] text-[#FAF5F0] block">
                AINA NAILS
              </span>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                Haute Couture • Agadir
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#B3A093] leading-relaxed max-w-sm">
              Votre studio d'art ongulaire de référence à Agadir. Manucure russe de haute précision, extensions d'ongles au gel sculpté, Nail Art personnalisé et pédicure spa d'exception.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#2D231E] border border-[#43352E] px-3 py-1.5 rounded-full text-xs text-[#E8C872]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Note Google 5.0 / 5 (46 avis certifiés)</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2F2520] hover:bg-[#D4AF37] hover:text-[#211A16] flex items-center justify-center transition-colors text-[#DFC399]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={salonInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2F2520] hover:bg-[#D4AF37] hover:text-[#211A16] flex items-center justify-center transition-colors text-[#DFC399]"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={salonInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2F2520] hover:bg-[#D4AF37] hover:text-[#211A16] flex items-center justify-center transition-colors text-[#DFC399]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury font-bold text-base text-[#FAF5F0] tracking-wide">
              Navigation Rapide
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#B3A093]">
              <li>
                <a href="#accueil" className="hover:text-[#D4AF37] transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Menu des Soins & Tarifs</a>
              </li>
              <li>
                <a href="#pourquoi-nous" className="hover:text-[#D4AF37] transition-colors">Pourquoi Nous Choisir</a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-[#D4AF37] transition-colors">Galerie Réalisations</a>
              </li>
              <li>
                <a href="#avis" className="hover:text-[#D4AF37] transition-colors">Avis Clients (5.0★)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Localisation & Horaires</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">Foire Aux Questions</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-luxury font-bold text-base text-[#FAF5F0] tracking-wide">
              Coordonnées & Accès
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#B3A093]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{salonInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+212681463564" className="hover:text-white transition-colors">
                  {salonInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{salonInfo.hours}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#1A140F] font-bold text-xs sm:text-sm py-2.5 rounded-xl hover:opacity-95 transition-opacity"
              >
                <MessageCircle className="w-4 h-4 fill-[#1A140F]" />
                <span>Prendre RDV sur WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#806E62]">
          <div>
            © {currentYear} Aina Nails Agadir. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            <span>Fait avec passion pour l'élégance à Agadir</span>
            <Heart className="w-3.5 h-3.5 text-[#E0A96D] fill-[#E0A96D]" />
          </div>
        </div>

      </div>
    </footer>
  );
}