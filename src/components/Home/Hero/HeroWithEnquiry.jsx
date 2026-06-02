"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import EnquireForm from "../EnquiryForm/EnquireForm";

export default function HeroWithEnquiry() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const hasAutoShownEnquiry = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAutoShownEnquiry.current || window.scrollY < 860) return;

      hasAutoShownEnquiry.current = true;
      setShowEnquiry(true);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero onEnquire={() => setShowEnquiry(true)} />
      <EnquireForm open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
}
