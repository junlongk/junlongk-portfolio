import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "gray.800",
        color: "gray.300",
      },
    }),
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Nunito",
      },
    },
  },
});
