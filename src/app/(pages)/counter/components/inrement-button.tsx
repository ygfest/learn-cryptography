"use client";

import { Button } from "@/components/ui/button";
import { increment } from "@/lib/features/counters/countersSlice";
import React from "react";
import { useDispatch } from "react-redux";

const IncrementButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
      bg={"green.600"}
      color={"white"}
      p={4}
    >
      Increment
    </Button>
  );
};

export default IncrementButton;
