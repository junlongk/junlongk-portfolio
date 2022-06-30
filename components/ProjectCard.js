import { Flex, Image, Link, Heading, Text } from "@chakra-ui/react";

export default function ProjectCard({ image, link, title, description }) {
  return (
    <Link href={link} isExternal>
      <Flex
        direction="column"
        justify="flex-start"
        align="center"
        border="1px #4A5568 solid"
        borderRadius="10px"
        m="15px"
        maxW="400px"
        maxH="280px"
        _hover={{ transform: "translateY(-3px)", borderColor: "gray.400" }}
      >
        <Image
          width="400px"
          fit="scale-down"
          src={image}
          alt={title}
          p="12px"
        />

        <Heading as="h2" size="sm" align="center" m="5px">
          {title}
        </Heading>

        <Text as="i" fontSize="xs" align="center" m="5px">
          {description}
        </Text>
      </Flex>
    </Link>
  );
}
