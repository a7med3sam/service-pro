"use client";

import TermsHero from "./TermsHero";
import LocationSection from "@/components/Location/LocationSection";
import SupportSection from "./SupportSection";
import TermsSection from "./TermsSection";


export default function TermsView() {
  return (
    <>
        <TermsHero />
        <TermsSection />
        <LocationSection />
        <SupportSection />
    </>
  );
}
