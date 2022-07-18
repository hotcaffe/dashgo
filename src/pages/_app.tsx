import { ChakraProvider } from "@chakra-ui/react";
import {ReactQueryDevtools} from 'react-query/devtools'
import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "src/components/Header";
import { SidebarDrawerProvider } from "src/contexts/SidebarDrawerContext";
import { makeServer } from "src/services/mirage";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Dashgo</title>
        </Head>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
