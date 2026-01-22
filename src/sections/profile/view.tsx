"use client";

import ContactUsHero from "./ProfileHero";
import LocationSection from "@/components/Location/LocationSection";
import SupportSection from "./SupportSection";
import ProfilePage from "./ProfilePage";

export default function ProfileView() {
  return (
    <>
        <ContactUsHero />
        <ProfilePage />

        <LocationSection />
        <SupportSection />
    </>
  );
}
