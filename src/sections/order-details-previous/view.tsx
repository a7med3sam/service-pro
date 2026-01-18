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
