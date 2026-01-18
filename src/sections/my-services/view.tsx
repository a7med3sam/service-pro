"use client";

import AboutUsHero from "./MyServicesHero";
import LocationSection from "@/components/Location/LocationSection";

import SupportSection from "./SupportSection";
import OrdersSection from "./OrdersSection";
export default function MyServicesView() {
  return (
    <>
      <AboutUsHero />
      <OrdersSection />
      <SupportSection />
      <LocationSection />
      <SupportSection />
    </>
  );
}
