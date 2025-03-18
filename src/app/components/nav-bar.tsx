"use client";
import {
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Avatar } from "@/components/ui/avatar";
import { Toaster } from "@/components/ui/toaster";
import Tabs from "./tabs";
import { userLogin, userLogout } from "../../../actions/auth.action";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";

function NavigationBar() {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();

  // Trigger toast on successful login

  // Server action for handling sign-in

  // Server action for handling sign-out

  return (
    <>
      <Toaster />

      <Box
        as="nav"
        position="fixed"
        top={0}
        zIndex={40}
        w="100%"
        borderBottom="1px solid"
        borderColor="gray.200"
        bg={{ base: "white", _dark: "#1D2A35" }}
        px={{ base: 4, md: 8 }}
        py={{ base: 3, md: 4 }}
        backdropFilter="blur(10px) saturate(150%)"
      >
        <Flex align="center" justify="space-between" w="full">
          <Link href="/">
            <Image
              src={
                colorMode === "dark" ? "/logo-dark.svg" : "/Cryptograppy.svg"
              }
              alt="logo"
              w="120px"
              h="35px"
            />
          </Link>

          <Flex align="center" gap={{ base: 1, md: 4 }}>
            <ColorModeButton color={{ base: "#04AA6D", _dark: "white" }} />
            {session && session.user ? (
              <>
                <ChakraLink
                  as={Link}
                  href="/startup"
                  fontWeight="medium"
                  fontSize={{ base: "sm", md: "md" }}
                  px={4}
                  py={2}
                  borderRadius="3xl"
                  color={{ base: "#04AA6D", _dark: "white" }}
                  _hover={{ color: "black" }}
                >
                  Get Started
                </ChakraLink>

                <ChakraLink
                  as={Link}
                  href={`/user/${session?.user?.id}`}
                  fontStyle={"bold"}
                  color={"black"}
                  _hover={{ color: "#04AA6D" }}
                >
                  <Text
                    fontStyle={"bold"}
                    color={{ base: "black", _dark: "white" }}
                  >
                    {session.user.name}
                  </Text>
                </ChakraLink>

                <Avatar
                  src={session?.user?.image ?? undefined}
                  name={session?.user?.name ?? undefined}
                />

                <form action={userLogout} method="post">
                  <Button
                    type="submit"
                    fontWeight="medium"
                    fontSize={{ base: "sm", md: "md" }}
                    px={4}
                    py={2}
                    bg={{ base: "#282A35", _dark: "white" }}
                    color={{ base: "white", _dark: "black" }}
                    borderRadius="3xl"
                    _hover={{ bg: "gray.600", color: "secondary" }}
                  >
                    Log out
                  </Button>
                </form>
              </>
            ) : (
              <>
                <ChakraLink
                  as={Link}
                  href="/introduction"
                  fontWeight="medium"
                  fontSize={{ base: "sm", md: "md" }}
                  px={4}
                  py={2}
                  borderRadius="3xl"
                  _hover={{ color: "gray.700" }}
                  color={{ base: "#04AA6D", _dark: "white" }}
                >
                  Get Started
                </ChakraLink>
                <form action={userLogin} method="post">
                  <Button
                    type="submit"
                    fontWeight="medium"
                    fontSize={{ base: "sm", md: "md" }}
                    px={6}
                    py={2}
                    bg="#04AA6D"
                    color="white"
                    borderRadius="3xl"
                    _hover={{ bg: "gray.600" }}
                  >
                    Log in
                  </Button>
                </form>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
      {<Tabs />}
    </>
  );
}

export default NavigationBar;
