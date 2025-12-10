"use client";

import { useState } from "react";
import Hero from "./Hero";
import EnquireForm from "../EnquiryForm/EnquireForm";

export default function HeroWithEnquiry() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <Hero onEnquire={() => setShowEnquiry(true)} />
      <EnquireForm open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
}
