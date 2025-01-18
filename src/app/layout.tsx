import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/nav-bar";
import Footer from "./components/footer";
import { Provider } from "@/components/ui/provider";
import { Flex, Box } from "@chakra-ui/react";
import Tabs from "./components/tabs";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Learn Cryptography",
  description: "Built by Stefano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <Provider>
            <Flex
              direction="column"
              minH="100vh" // Makes the container take the full height of the viewport
            >
              {/* Navigation Bar at the Top */}
              <Box as="header">
                <NavigationBar />
                <Tabs />
              </Box>

              {/* Main Content (Stretchable Area) */}
              <Box as="main" flex="1" px={4} py={6} marginTop={20}>
                {children}
              </Box>

              {/* Footer at the Bottom */}
              <Box as="footer">
                <Footer />
              </Box>
            </Flex>
          </Provider>
        </StoreProvider>
      </body>
    </html>
  );
}
