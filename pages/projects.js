import { Container, Flex, Heading, Text, Divider } from "@chakra-ui/react";

import ProjectCard from "../components/ProjectCard";
import projectData from "../components/projectData";

const projectCards = projectData.map((project) => {
  return (
    <ProjectCard
      image={project.image}
      link={project.link}
      title={project.title}
      description={project.description}
    />
  );
});

export default function Projects() {
  return (
    <Flex
      direction="column"
      justify="space-around"
      align="center"
      m="40px"
      maxW={{
        base: "330px",
        sm: "450px",
        md: "720px",
        lg: "960px",
        xl: "1400px",
      }}
    >
      <Heading as="h1" size="xl" m="10px">
        Personal Projects
      </Heading>
      <Container mb="20px">
        <Text fontSize="sm" align="center">
          These are my personal projects.
        </Text>
      </Container>
      <ProjectCard
        image="/images/projects-snippets/NFT-Report.png"
        link="https://nft-report.vercel.app/"
        title="NFT Report"
        description="Web app for showing details of user's NFT collection built using Next.js"
      />
      <Divider my="20px" />
      <Heading as="h1" size="xl" m="10px">
        Course Projects
      </Heading>
      <Container mb="20px">
        <Text fontSize="sm" align="center">
          These are projects done for online courses.
        </Text>
      </Container>
      <Flex direction="row" justify="center" wrap="wrap">
        {projectCards}
      </Flex>
    </Flex>
  );
}
