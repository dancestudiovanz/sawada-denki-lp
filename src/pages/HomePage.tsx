import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Works from "../components/Works";
import Recruitment from "../components/Recruitment";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";

export default function HomePage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState("general");

  const handleOpenInquiry = (category: string = "general") => {
    setInquiryType(category);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-blue/30 selection:text-brand-navy">
      <Header onOpenInquiry={handleOpenInquiry} variant="home" />

      <Hero onOpenInquiry={handleOpenInquiry} />

      <main>
        <WhyUs />
        <Services />
        <Works />
        <Recruitment onOpenInquiry={handleOpenInquiry} />
        <FAQ />
        <ContactCTA onOpenInquiry={handleOpenInquiry} />
      </main>

      <Footer />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultType={inquiryType}
      />
    </div>
  );
}
