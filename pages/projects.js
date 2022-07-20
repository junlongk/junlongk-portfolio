import { Container, Flex, Heading, Text } from "@chakra-ui/react";

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

export default function projects() {
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
      <Container>
        <Text fontSize="sm" align="center" m="20px">
          These are my own personal projects.
        </Text>
      </Container>
      <ProjectCard
        image="/images/projects-snippets/NFT-Report.png"
        link="https://nft-report.vercel.app/"
        title="NFT Report"
        description="Web app for showing details of user's NFT collection built using Next.js"
      />
      <Heading as="h1" size="xl" m="10px">
        Course Projects
      </Heading>
      <Container>
        <Text fontSize="sm" align="center" m="20px">
          These consist of projects done during online courses.
        </Text>
      </Container>
      <Flex direction="row" justify="center" wrap="wrap">
        {projectCards}
      </Flex>
    </Flex>
  );
}
