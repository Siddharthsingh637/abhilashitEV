"use client";

import { useState } from "react";
import Servicebar from "./Servicebar";
import ServiceForm from "@/components/Forms/ServiceForm/ServiceForm";

export default function ServicebarWithForm() {
  const [showServiceForm, setShowServiceForm] = useState(false);

  return (
    <>
      <Servicebar onBookService={() => setShowServiceForm(true)} />
      <ServiceForm open={showServiceForm} onClose={() => setShowServiceForm(false)} />
    </>
  );
}
