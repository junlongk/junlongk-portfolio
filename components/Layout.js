import { Box } from "@chakra-ui/react";

import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Box bgColor="gray.900">
      <Head>
        <title>Jun Long&apos;s Portfolio</title>
        <meta name="description" content="Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </Box>
  );
}
