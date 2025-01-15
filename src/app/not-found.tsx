import { Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { TbError404 } from "react-icons/tb";

export default function NotFoundPage() {
  return (
    <Container centerContent py={16}>
      <Stack direction={"column"} spaceX={6} alignItems={"center"}>
        <TbError404 size={120} color="gray" />
        <Heading as="h1" fontWeight={"bold"} color={"black"} fontSize={"4xl"}>
          Not Found
        </Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          Nothing to see here
        </Text>{" "}
        <br />
        <Link href="/" color={"#04AA6D"} fontWeight={"bold"} fontSize={"lg"}>
          Go back instead?
        </Link>
      </Stack>
    </Container>
  );
}
