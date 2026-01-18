"use client";

import AboutUsHero from "./AboutUsHero";
import LocationSection from "@/components/Location/LocationSection";
import Checkout from "./Checkout";


export default function CheckoutView() {
  return (
    <>
      <AboutUsHero />
      <Checkout />
      <LocationSection />
    </>
  );
}
