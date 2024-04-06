import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Spacer, Container, AspectRatio } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.900" color="white">
        {/* Hero Section */}
        <VStack spacing={8} mb={20}>
          <Image src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwb24lMjBzdGFnZXxlbnwwfHx8fDE3MTIzODU2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="Band Logo" />
          <Heading as="h1" size="2xl">
            The Rockers
          </Heading>
          <Text fontSize="xl">Join us on our 2023 World Tour!</Text>
          <Button colorScheme="purple" leftIcon={<FaTicketAlt />} size="lg">
            Get Tickets
          </Button>
        </VStack>

        {/* Tour Dates Section */}
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={6}>
            Tour Dates
          </Heading>
          <VStack spacing={4} alignItems="stretch">
            <TourDateItem date="April 15, 2023" location="New York, NY" venue="Madison Square Garden" />
            <TourDateItem date="April 22, 2023" location="Los Angeles, CA" venue="Staples Center" />
            <TourDateItem date="May 5, 2023" location="London, UK" venue="O2 Arena" />
            <TourDateItem date="May 12, 2023" location="Berlin, DE" venue="Mercedes-Benz Arena" />
            {/* More tour dates */}
          </VStack>
          <Button mt={8} colorScheme="purple" size="lg" w="full">
            View All Dates
          </Button>
        </Container>
      </Flex>
    </Box>
  );
};

const TourDateItem = ({ date, location, venue }) => {
  return (
    <HStack spacing={4} p={4} bg="gray.700" borderRadius="md">
      <FaMusic />
      <Box>
        <Heading as="h3" size="md">
          {date}
        </Heading>
        <Text>{venue}</Text>
        <HStack spacing={1}>
          <FaMapMarkedAlt />
          <Text>{location}</Text>
        </HStack>
      </Box>
      <Spacer />
      <Button colorScheme="green" size="sm">
        Buy Tickets
      </Button>
    </HStack>
  );
};

export default Index;
