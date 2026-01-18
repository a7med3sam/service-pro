"use client";

import AboutUsHero from "./AboutUsHero";
import LocationSection from "@/components/Location/LocationSection";
import OrdersSectionSecure from "./OrdersSectionSecure";
import DocumentsUploadSection from "./DocumentsUploadSection";
import PersonalDataSection from "./PersonalDataSection";
import OrderStatus from "./OrderStatus";
import CommentSection from "./CommentSection";
import DownloadProjects from "./DownloadProjects";
import OrderCardPay from "./OrderCardPay";


export default function OrderDetailsEditView() {
  return (
    <>
      <AboutUsHero />
      <OrdersSectionSecure />
      <PersonalDataSection />
      <DocumentsUploadSection />
      <OrderCardPay />
      <OrderStatus />
      <DownloadProjects />
      <CommentSection />
      <LocationSection />
    </>
  );
}
