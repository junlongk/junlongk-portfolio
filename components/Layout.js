import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Jun Long&apos;s Portfolio</title>
        <meta name="description" content="Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex minH="100vh" direction="column" justify="space-between">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  );
}
