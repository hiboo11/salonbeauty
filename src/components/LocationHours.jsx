import React from "react";
import { salonInfo } from "../data/salonData";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, Calendar, Car } from "lucide-react";

export default function LocationHours({ onOpenBooking }) {
  const scheduleDays = [
    { day: "Lundi", hours: "10:00 - 22:00", current: true },
    { day: "Mardi", hours: "10:00 - 22:00", current: false },
    { day: "Mercredi", hours: "10:00 - 22:00", current: false },
    { day: "Jeudi", hours: "10:00 - 22:00", current: false },
    { day: "Vendredi", hours: "10:00 - 22:00", current: false },
    { day: "Samedi", hours: "10:00 - 22:00", current: false },
    { day: "Dimanche", hours: "10:00 - 22:00", current: false },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F5EDE6]/60 border-t border-[#EAE0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EFE3D7] border border-[#DFCBB9] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8C5E3C] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Localisation & Accès</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#201A17]">
            Rendez-nous Visite à Agadir
          </h2>
          <p className="text-sm sm:text-base text-[#61534C] leading-relaxed">
            Idéalement situé sur l'Avenue Laayoune au Quartier Al Wifaq. Un cadre chic, facile d'accès avec stationnement à proximité, ouvert sans interruption jusqu'à 22h00.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7DBD0] shadow-sm space-y-6">
              
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F7EFE8] border border-[#E2D2C4] flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#251E1A] mb-1">Notre Adresse</h4>
                  <p className="text-sm text-[#5C4F47] leading-relaxed">
                    {salonInfo.address}
                  </p>
                  <p className="text-xs text-[#8C7A70] mt-1">
                    Quartier Al Wifaq, proche de tous commerces
                  </p>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#F2E7DE]">
                <div className="w-11 h-11 rounded-xl bg-[#F7EFE8] border border-[#E2D2C4] flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#251E1A] mb-1">Téléphone & WhatsApp</h4>
                  <a
                    href="tel:+212681463564"
                    className="text-base font-bold text-[#B8860B] hover:underline block"
                  >
                    {salonInfo.phone}
                  </a>
                  <p className="text-xs text-[#8C7A70] mt-0.5">
                    Appels directs & réservations WhatsApp 7j/7
                  </p>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#F2E7DE]">
                <div className="w-11 h-11 rounded-xl bg-[#F7EFE8] border border-[#E2D2C4] flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm text-[#251E1A]">Horaires d'Ouverture</h4>
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      7j/7 jusqu'à 22:00
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {scheduleDays.map((s, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between py-1 border-b border-[#F7EFE8] last:border-0 text-[#61524A]"
                      >
                        <span className="font-medium">{s.day}</span>
                        <span className="font-semibold text-[#251E1A]">{s.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${salonInfo.phoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2B231F] hover:bg-[#3D332D] text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Appeler le salon</span>
                </a>

                <button
                  onClick={() => onOpenBooking()}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#1E1711] text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-xs hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-[#1E1711]" />
                  <span>RDV WhatsApp</span>
                </button>
              </div>

            </div>

            {/* Parking & Access tip box */}
            <div className="bg-[#FAF2EB] rounded-2xl p-4 sm:p-5 border border-[#E5D5C6] flex items-center gap-3 text-xs text-[#63544C]">
              <Car className="w-5 h-5 text-[#B8860B] shrink-0" />
              <span>
                <strong>Accès facile :</strong> Places de stationnement gratuites le long de l'avenue et accès aisé en taxi ou VTC depuis le centre d'Agadir.
              </span>
            </div>

          </div>

          {/* Right Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#E7DBD0] shadow-sm">
              <div className="relative rounded-xl overflow-hidden aspect-[16/11] sm:aspect-[16/10] bg-[#E9DDD1] border border-[#E2D2C3]">
                {/* Embedded Google Map pointing to Avenue Laayoune, Agadir */}
                <iframe
                  title="Carte Google Maps Aina Nails Agadir"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13769.752391206584!2d-9.5699478!3d30.4093957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6f9f4a0a001%3A0x1000000000000000!2sAvenue%20Laayoune%2C%20Agadir!5e0!3m2!1sfr!2sma!4v1710000000000!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Card on top */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-[#E4D5C7] max-w-xs text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-serif-luxury font-bold text-sm text-[#231B18]">
                      Aina Nails Agadir
                    </span>
                    <span className="text-[10px] bg-[#D4AF37] text-white px-1.5 py-0.2 rounded font-bold">5.0★</span>
                  </div>
                  <p className="text-[11px] text-[#695B52]">
                    Av. Laayoune, Quartier Al Wifaq
                  </p>
                </div>
              </div>

              {/* Map Footer Itinerary Button */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                <span className="text-xs text-[#73635A]">
                  📍 Coordonnées précises transmises également sur WhatsApp dès votre confirmation.
                </span>
                <a
                  href="https://maps.google.com/?q=Avenue+Laayoune+Al+Wifaq+Agadir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#FAF3EC] hover:bg-[#F2E5D8] border border-[#DFCBB9] text-[#4A3C34] text-xs font-semibold px-4 py-2 rounded-xl transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Ouvrir l'Itinéraire Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}