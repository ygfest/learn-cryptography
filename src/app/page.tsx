import {
  Button,
  Stack,
  Container,
  Heading,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color={"gray.700"}
        >
          Learning Cryptography <br />
          <Text as={"span"} color={"#04AA6D"} fontWeight={"bold"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Dive into the world of cryptography with simple, interactive lessons
          and hands-on techniques. Master encryption, decryption, and security
          concepts in a fun and engaging way—whether you&apos;re a beginner or
          looking to refine your skills.
        </Text>
        <Stack spaceX={6} direction={"row"}>
          <ChakraLink
            href={"/introduction"}
            rounded={"full"}
            px={6}
            color={"white"}
            bg={"#04AA6D"}
            _hover={{ bg: "#04AA6D/40" }}
          >
            Get started
          </ChakraLink>
          <Button
            bg={"none"}
            rounded={"full"}
            border={2}
            borderColor={"#04AA6D"}
            color={"#04AA6D"}
          >
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  );
}
