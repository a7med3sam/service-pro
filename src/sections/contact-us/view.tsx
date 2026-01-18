"use client";

import ContactUsHero from "./ContactUsHero";
import LocationSection from "@/components/Location/LocationSection";
import SupportSection from "./SupportSection";
import ContactSection from "./ContactSection";

export default function ContactUsView() {
  return (
    <>
        <ContactUsHero />
        <ContactSection />

        <LocationSection />
        <SupportSection />
    </>
  );
}
