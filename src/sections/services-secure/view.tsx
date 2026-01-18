"use client";

import AboutUsHero from "./AboutUsHero";
import LocationSection from "@/components/Location/LocationSection";
import OrdersSectionSecure from "./OrdersSectionSecure";
import DocumentsUploadSection from "./DocumentsUploadSection";
import PersonalDataSection from "./PersonalDataSection";


export default function ServicesSecureView() {
  return (
    <>
      <AboutUsHero />
      <OrdersSectionSecure />
      <PersonalDataSection />
      <DocumentsUploadSection />
      <LocationSection />
    </>
  );
}
