import { Container, Text, VStack, Heading, Box, Image, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" />
        </Box>
        <Text fontSize="lg">A place where I share my thoughts and experiences.</Text>
        <Button as={Link} to="/add-post" colorScheme="blue">Add New Post</Button>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            <HStack spacing={4} mt={4}>
              <Button colorScheme="red" onClick={() => handleDelete(post.id)}>Delete</Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;