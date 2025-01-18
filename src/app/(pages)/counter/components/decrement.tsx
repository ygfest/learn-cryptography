"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "@/lib/features/counters/countersSlice";

const DecrementButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      p={4}
      bg={"blue.600"}
      color={"white"}
      onClick={() => dispatch(decrement())}
    >
      Decrement
    </Button>
  );
};

export default DecrementButton;
