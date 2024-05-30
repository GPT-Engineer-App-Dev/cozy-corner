import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" />
        </Box>
        <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        <Button as={Link} to="/add-post" colorScheme="blue">Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;