"use client";

import OurTeam from "./OurTeam";
import OurCategory from "./OurCategory";
import AboutUs from "./AboutUs";
import ServicesSection from "./ServicesSection/ServicesSection";
import LocationSection from "@/components/Location/LocationSection";
import Hero from "./Hero";
import SupportSection from "./SupportSection";

export default function HomeView() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <OurCategory />
      <OurTeam />
      <LocationSection />
      <SupportSection />
    </>
  );
}
