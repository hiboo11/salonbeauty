import React, { useState, useEffect } from "react";
import { salonInfo } from "../data/salonData";
import { MessageCircle, Phone, Clock, MapPin, Menu, X, Sparkles, Star } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Prestations", href: "#services" },
    { name: "Pourquoi Nous", href: "#pourquoi-nous" },
    { name: "Galerie", href: "#galerie" },
    { name: "Avis (5.0★)", href: "#avis" },
    { name: "Accès & Horaires", href: "#contact" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Banner info */}
      <div className="bg-[#2A2421] text-[#EFE4DC] text-xs py-2 px-4 border-b border-[#3E342F] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Av. Laayoune, Quartier Al Wifaq, Agadir</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#E0CEB5]">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Ouvert 7j/7 jusqu'à 22:00</span>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center gap-1 bg-[#3A3029] px-2.5 py-0.5 rounded-full text-amber-300 font-medium text-[11px]">
              <Star className="w-3 h-3 fill-amber-300" />
              <span>5.0 / 5 (46 avis Google)</span>
            </span>
            <a
              href="tel:+212681463564"
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+212 6 81 46 35 64</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF5F0]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E8DDD4]"
            : "bg-[#FAF5F0] py-4 border-b border-[#EFE4DC]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#accueil" className="flex flex-col text-left group">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#241E1B] group-hover:text-[#B8860B] transition-colors">
                AINA NAILS
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C7A70] font-medium -mt-0.5">
                Haute Couture • Agadir
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[#4A3E39] hover:text-[#B8860B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#B8860B] text-[#1E1711] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-[#F2DE9D]"
              >
                <MessageCircle className="w-4 h-4 fill-[#1E1711]" />
                <span>Réserver via WhatsApp</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="p-2 bg-[#D4AF37] text-white rounded-full sm:hidden"
                aria-label="Réserver"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#2A2421] hover:bg-[#EFE4DC] focus:outline-none"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF5F0] border-b border-[#E0D3C9] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-[#3A3029] hover:text-[#B8860B] py-2 px-3 rounded-lg hover:bg-[#F3E9E0] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E8DDD4] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#1E1711] font-semibold py-3 rounded-full shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-[#1E1711]" />
                  <span>Réserver via WhatsApp</span>
                </button>
                <a
                  href="tel:+212681463564"
                  className="w-full flex items-center justify-center gap-2 border border-[#C5B3A5] text-[#3E342F] font-medium py-2.5 rounded-full text-sm"
                >
                  <Phone className="w-4 h-4 text-[#B8860B]" />
                  <span>Appeler : 06 81 46 35 64</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}