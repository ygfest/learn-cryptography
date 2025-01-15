// components/ui/ToastTrigger.tsx (Client Component)
"use client";

import { useEffect } from "react";
import { toaster } from "@/components/ui/toaster";

interface ToastTriggerProps {
  sessionUser: string | null;
}

const ToastTrigger = ({ sessionUser }: ToastTriggerProps) => {
  useEffect(() => {
    if (sessionUser) {
      toaster.create({
        title: "Welcome!",
        description: `Hello, ${sessionUser}`,
        duration: 5000,
      });
    }
  }, [sessionUser]);

  return null; // This component doesn't render anything, just triggers the toast
};

export default ToastTrigger;
