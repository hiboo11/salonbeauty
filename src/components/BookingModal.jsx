import React, { useState, useEffect } from "react";
import { salonInfo, serviceCategories, generateWhatsAppLink } from "../data/salonData";
import { X, MessageCircle, Calendar, Clock, User, FileText, CheckCircle2, Sparkles, Heart } from "lucide-react";

export default function BookingModal({ isOpen, onClose, preselectedService }) {
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  // Flatten all services for the dropdown
  const allServices = serviceCategories.flatMap((cat) => cat.services);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService.name || preselectedService);
    } else if (!selectedService && allServices.length > 0) {
      setSelectedService(allServices[0].name);
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = generateWhatsAppLink({
      service: selectedService,
      date,
      time,
      name,
      note
    });
    window.open(link, "_blank");
    onClose();
  };

  const quickDays = [
    { label: "Aujourd'hui", val: "Aujourd'hui" },
    { label: "Demain", val: "Demain" },
    { label: "Ce Vendredi", val: "Ce Vendredi" },
    { label: "Ce Samedi", val: "Ce Samedi" },
    { label: "Ce Dimanche", val: "Ce Dimanche" },
  ];

  const quickTimes = [
    "10h30", "12h00", "14h30", "16h00", "18h00", "19h30", "20h30"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="relative bg-[#FAF5F0] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E3D3C5] text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#E8C872]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EFE3D7] hover:bg-[#E5D2C2] text-[#3D322B] flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8C5E3C] uppercase tracking-wider bg-[#F3E7DC] px-2.5 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 text-[#B8860B]" />
            <span>Réservation Personnalisée</span>
          </div>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#201A17]">
            Réserver chez Aina Nails Agadir
          </h3>
          <p className="text-xs sm:text-sm text-[#66574F]">
            Sélectionnez votre prestation et vos créneaux. Notre équipe vous répond immédiatement sur WhatsApp pour confirmer l'heure exacte.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold text-[#483B33] mb-1.5">
              Soin ou prestation souhaitée *
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-white border border-[#D9C8BA] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 focus:border-[#B8860B]"
              required
            >
              {serviceCategories.map((cat) => (
                <optgroup key={cat.id} label={cat.title}>
                  {cat.services.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name} — {srv.price} ({srv.duration})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Quick Date Pills & Date Input */}
          <div>
            <label className="block text-xs font-semibold text-[#483B33] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Jour souhaité *</span>
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {quickDays.map((d) => (
                <button
                  type="button"
                  key={d.val}
                  onClick={() => setDate(d.val)}
                  className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                    date === d.val
                      ? "bg-[#29221E] text-amber-200 border-[#29221E]"
                      : "bg-white text-[#564840] border-[#DFCFC2] hover:bg-[#F3E7DC]"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Ou écrivez votre date (ex: Mardi 24 Octobre)"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white border border-[#D9C8BA] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 focus:border-[#B8860B]"
              required
            />
          </div>

          {/* Preferred Time Slots */}
          <div>
            <label className="block text-xs font-semibold text-[#483B33] mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Créneau horaire souhaité (Ouvert jusqu'à 22:00) *</span>
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {quickTimes.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTime(t)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                    time === t
                      ? "bg-[#B8860B] text-white border-[#B8860B]"
                      : "bg-white text-[#564840] border-[#DFCFC2] hover:bg-[#F3E7DC]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Ex: 15h30 ou En soirée vers 20h00"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-white border border-[#D9C8BA] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 focus:border-[#B8860B]"
              required
            />
          </div>

          {/* Client Name & Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#483B33] mb-1.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Votre Nom / Prénom</span>
              </label>
              <input
                type="text"
                placeholder="Ex: Fatima ou Sophie"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-[#D9C8BA] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 focus:border-[#B8860B]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#483B33] mb-1.5 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Précision (Dépose, Nail Art...)</span>
              </label>
              <input
                type="text"
                placeholder="Ex: J'ai une dépose à faire"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-white border border-[#D9C8BA] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#2C231F] focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40 focus:border-[#B8860B]"
              />
            </div>
          </div>

          {/* Live Preview Box */}
          <div className="bg-[#EFE4DC]/70 p-3 rounded-xl border border-[#DFD1C4] text-xs text-[#5D4E46] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#352A24]">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Aperçu de votre message WhatsApp :</span>
            </div>
            <p className="italic text-[11px] text-[#69584F] line-clamp-2">
              "Bonjour Aina Nails Agadir ! Je souhaite réserver pour {selectedService || 'un soin'}{date ? ` le ${date}` : ''}{time ? ` à ${time}` : ''}..."
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#E8C872] to-[#B8860B] hover:opacity-95 text-[#1B140F] font-bold text-sm sm:text-base py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-[#F6E6B8]"
          >
            <MessageCircle className="w-5 h-5 fill-[#1B140F]" />
            <span>Confirmer & Envoyer sur WhatsApp</span>
          </button>

          {/* Reassurance text */}
          <div className="text-center text-[11px] text-[#7C6B61] pt-1">
            <span>📞 Réponse rapide • Salon situé Av. Laayoune, Quartier Al Wifaq</span>
          </div>

        </form>
      </div>
    </div>
  );
}