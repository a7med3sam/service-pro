"use client";

import AboutUsHero from "./AboutUsHero";
import LocationSection from "@/components/Location/LocationSection";
import OrdersSectionSecure from "./OrdersSectionSecure";
import OrderStatus from "./OrderStatus";
import CommentSection from "./CommentSection";
import DocumentsListSection from "./DocumentsListSection";
import PersonalDataSection from "./PersonalDataSection";


export default function OrderDetailsPreviousView() {
  return (
    <>
      <AboutUsHero />
      <OrdersSectionSecure />
      <OrderStatus />
      <PersonalDataSection />
      <DocumentsListSection />
      {/* <DocumentsUploadSection />
      <OrderCardPay /> */}
      {/* <DownloadProjects /> */}
      <CommentSection />
      <LocationSection />
    </>
  );
}
