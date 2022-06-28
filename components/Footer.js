import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box mt={20} mb={12}>
      <Text
        fontSize="sm"
        textAlign="center"
        maxW="1000px"
        m="0 auto"
        borderTop="1px #fff solid"
        mt={4}
        pb={10}
        color="gray.50"
      >
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Copyright 2022
        junlongk.com
      </Text>
    </Box>
  );
}
