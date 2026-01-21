"use client";

import AboutUsHero from "./AboutUsHero";
import LocationSection from "@/components/Location/LocationSection";
import OrdersSectionSecure from "./OrdersSectionSecure";
import OrderStatus from "./OrderStatus";
import CommentSection from "./CommentSection";


export default function OrderDetailsPreviousView() {
  return (
    <>
      <AboutUsHero />
      <OrdersSectionSecure />
      <OrderStatus />
      {/* <PersonalDataSection />
      <DocumentsUploadSection />
      <OrderCardPay /> */}
      {/* <DownloadProjects /> */}
      <CommentSection />
      <LocationSection />
    </>
  );
}
