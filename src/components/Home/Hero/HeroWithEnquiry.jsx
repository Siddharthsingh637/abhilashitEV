"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import EnquireForm from "../EnquiryForm/EnquireForm";

export default function HeroWithEnquiry() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      // Check if form has already been shown in this session
      const hasShownEnquiry = sessionStorage.getItem("enquiry_form_shown");
      if (hasShownEnquiry || window.scrollY < 860) return;

      // Mark as shown in sessionStorage
      sessionStorage.setItem("enquiry_form_shown", "true");
      setShowEnquiry(true);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted]);

  return (
    <>
      <Hero onEnquire={() => setShowEnquiry(true)} />
      <EnquireForm open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
}
