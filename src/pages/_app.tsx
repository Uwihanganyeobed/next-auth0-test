import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
     </UserProvider>
  );
}

export default MyApp;

