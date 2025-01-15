import { FiUser } from "react-icons/fi";
import { SiVite } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import {
  Button,
  Stack,
  For,
  Container,
  Heading,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <Container maxW={"5xl"} marginTop={24}>
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
          Learning Crytography <br />
          <Text as={"span"} color={"#04AA6D"} fontWeight={"bold"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Dive into the world of cryptography with simple, interactive lessons
          and hands-on techniques. Master encryption, decryption, and security
          concepts in a fun and engaging way—whether you're a beginner or
          looking to refine your skills. Start your journey to becoming a
          cryptography pro today!
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
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  );
}
