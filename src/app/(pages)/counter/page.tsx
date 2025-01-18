"use client";

import React from "react";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { Container, Span, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import IncrementButton from "./components/inrement-button";
import DecrementButton from "./components/decrement";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <Stack direction={"row"} spaceX={4}>
      <Container alignItems={"center"} marginTop={24} justifyContent={"center"}>
        <IncrementButton />
        <Span color={"red.400"} fontStyle={"bold"} textStyle={"4xl"}>
          {count}
        </Span>
        <DecrementButton />
      </Container>
    </Stack>
  );
}
