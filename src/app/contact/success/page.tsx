"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ConsultationSuccessComponent } from "./components/consultationSuccess";

export default function ConsultationSuccess() {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const valid = sessionStorage.getItem("consultationSuccess");
    if (valid === "true") {
      setIsAllowed(true);
    } else {
      router.replace("/contact");
    }
  }, [router]);

  const handleDismiss = () => {
    sessionStorage.removeItem("consultationSuccess");
    router.replace("/contact");
  };

  if (!isAllowed) return null;

  return <ConsultationSuccessComponent onDismiss={handleDismiss} />;
}
