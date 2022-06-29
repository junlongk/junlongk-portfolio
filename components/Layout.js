import { Box } from "@chakra-ui/react";

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
      <Box className="flex-wrapper">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </Box>
      <style global jsx>{`
        body {
          background-color: #171923;
        }
        .flex-wrapper {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
