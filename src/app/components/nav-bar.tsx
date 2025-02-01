import {
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { auth } from "../auth";
import { Avatar } from "@/components/ui/avatar";
import { Toaster } from "@/components/ui/toaster";
import Tabs from "./tabs";
import { userLogin, userLogout } from "../../../actions/auth.action";

async function NavigationBar() {
  const session = await auth();

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
        bg="white"
        px={{ base: 4, md: 8 }}
        py={{ base: 3, md: 4 }}
        backdropFilter="blur(10px) saturate(150%)"
      >
        <Flex align="center" justify="space-between" w="full">
          <Link href="/">
            <Image src="/Cryptograppy.svg" alt="logo" w="120px" h="35px" />
          </Link>

          <Flex align="center" gap={{ base: 1, md: 4 }}>
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
                  color={"#04AA6D"}
                  bg="none"
                  _hover={{ color: "black" }}
                >
                  Get Started
                </ChakraLink>

                <ChakraLink
                  as={Link}
                  href={`/user/${session?.id}`}
                  fontStyle={"bold"}
                  color={"black"}
                  _hover={{ color: "#04AA6D" }}
                >
                  <Text fontStyle={"bold"}>{session.user.name}</Text>
                </ChakraLink>

                <Avatar src={session?.user?.image} name={session?.user?.name} />

                <form action={userLogout} method="post">
                  <Button
                    type="submit"
                    fontWeight="medium"
                    fontSize={{ base: "sm", md: "md" }}
                    px={4}
                    py={2}
                    bg="#282A35"
                    color="white"
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
