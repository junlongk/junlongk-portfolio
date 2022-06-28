import Head from "next/head";
import { Heading, Stack } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jun Long&apos;s Portfolio</title>
        <meta name="description" content="Web Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing="40px" align="center">
        <Heading
          as="h1"
          size="4xl"
          bgGradient="linear(to-l, gray.100, gray.600)"
          bgClip="text"
        >
          Welcome to my portfolio!
        </Heading>
        <Heading
          as="h2"
          size="3xl"
          bgGradient="linear(to-l, gray.100, gray.600)"
          bgClip="text"
        >
          Web developer
        </Heading>
      </Stack>
    </div>
  );
}
