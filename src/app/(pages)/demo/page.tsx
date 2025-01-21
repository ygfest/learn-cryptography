"use client";

import { Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TbError404 } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";

interface TodoProps {
  id: number;
  title: string;
}

export default function NotFoundPage() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

  
  return (
    <Container centerContent py={16}>
      <Stack direction={"column"} spaceX={6} alignItems={"center"}>
        <TbError404 size={120} color="gray" />
        <Heading as="h1" fontWeight={"bold"} color={"black"} fontSize={"4xl"}>
          These are raw data
        </Heading>
        {isPending && (
          <Text color="gray.500" fontSize="lg">
            Loading data...
          </Text>
        )}

        {isError && (
          <Text color="gray.500" fontSize="lg">
            Error laoding data...
          </Text>
        )}

        {etoYungData?.map((todo) => (
          <Text color="gray.500" fontSize="lg" key={todo.id}>
            {todo.title}
          </Text>
        ))}
      </Stack>
    </Container>
  );
}
