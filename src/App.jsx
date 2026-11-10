import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import BookingModal from "./components/BookingModal";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import LocationHours from "./components/LocationHours";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./App.css";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenBooking = (service = null) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#2C231F] flex flex-col font-sans selection:bg-[#E0A96D]/30 selection:text-[#8C5E3C]">
      {/* Header / Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section Héro */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section Pourquoi Nous Choisir */}
        <WhyChooseUs />

        {/* Catalogue des Services */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* Galerie Style Instagram */}
        <Gallery />

        {/* Section Avis Clients */}
        <Reviews />

        {/* Localisation, Google Maps & Horaires */}
        <LocationHours onOpenBooking={() => handleOpenBooking()} />

        {/* Foire Aux Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal with WhatsApp Generator */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}