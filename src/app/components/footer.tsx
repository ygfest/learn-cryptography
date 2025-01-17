"use client";

import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

const Logo = () => {
  return <Image src="/Cryptograppy.svg" h="45px" />;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"gray.50"} color={"gray.700"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spaceY={4}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2025 Learn Cryptography. All rights reserved</Text>
        <Stack direction={"row"} gap={6}>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/ssanesteban"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/__sstefano/"}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/ygfest"}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
