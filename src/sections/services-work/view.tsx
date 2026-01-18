"use client";

import ServicesWorkHero from "./ServicesWorkHero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import LocationSection from "@/components/Location/LocationSection";
import SupportSection from "./SupportSection";
import TestimonialsSection from "./TestimonialsSection";

export default function ServicesWorkView() {
  return (
    <>
        <ServicesWorkHero />
        <ServicesSection />
        <TestimonialsSection />
        <LocationSection />
        <SupportSection />
    </>
  );
}
