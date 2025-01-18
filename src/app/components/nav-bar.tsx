import { Box, Button, Flex, Link as ChakraLink, Image } from "@chakra-ui/react";
import Link from "next/link";
import { auth, signIn, signOut } from "../auth";
import { Avatar } from "@/components/ui/avatar";
import { Toaster } from "@/components/ui/toaster";

async function NavigationBar() {
  const session = await auth();

  // Trigger toast on successful login

  // Server action for handling sign-in
  async function handleSignIn() {
    "use server";
    await signIn("github");
  }

  // Server action for handling sign-out
  async function handleSignOut() {
    "use server";
    await signOut();
  }

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
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                >
                  Get Started
                </ChakraLink>

                <ChakraLink
                  as={Link}
                  href={`/user/${session?.id}`}
                  fontWeight="medium"
                >
                  {session.user.name}
                </ChakraLink>

                <Avatar
                  src="https://bit.ly/sage-adebayo"
                  name={session?.user?.name}
                />

                <form action={handleSignOut} method="post">
                  <Button
                    type="submit"
                    fontWeight="medium"
                    fontSize={{ base: "sm", md: "md" }}
                    px={4}
                    py={2}
                    bg="#04AA6D"
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
                <form action={handleSignIn} method="post">
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
    </>
  );
}

export default NavigationBar;
