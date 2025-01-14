"use client";

import { Toaster, toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

function ClientToaster({
  toastMessage,
}: {
  toastMessage?: { title: string; description: string };
}) {
  useEffect(() => {
    if (toastMessage) {
      toaster.create({
        title: toastMessage.title,
        description: toastMessage.description,
      });
    }
  }, [toastMessage]);

  return <Toaster />;
}

export default ClientToaster;
