"use client";

import AboutUsHero from "./AboutUsHero";
import LocationSection from "@/components/Location/LocationSection";
import OurCategory from "./OurCategory";
import ReliableSupportSection from "./ReliableSupportSection";
import SupportSection from "./SupportSection";
export default function ServicesView() {
  return (
    <>
      <AboutUsHero />
      <ReliableSupportSection />
      <OurCategory />
      <LocationSection />
      <SupportSection />
    </>
  );
}
