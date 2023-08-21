import React from 'react';
import { Box, Flex, Text, List, ListItem, Image, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

function AboutUs() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");
  return (
    <Flex direction="column" minHeight="100vh" minWidth="100vh">
      <Header />

      <Flex as="main" flex={1} p={4}>
        <Sidebar />
        <Box flex={1} ml={4} p={5} bg={bg} borderRadius="md" maxWidth={'full'} minHeight={'full'} color={color}>
          <Container maxWidth={'70%'} mt={10}>

            <Heading as='h2' size='2xl'>About Us</Heading>
            <Text mt={4}>
              Welcome to FoodBank, a platform designed to streamline the process of receiving donations and managing food inventory and distribution for food banks.
            </Text>

            <Heading as='h2' size='xl' mt={10}>Our Mission:</Heading>
            <Text mt={4}>
              To provide an efficient and user-friendly solution for food banks, enabling them to focus on their core mission of feeding those in need.
            </Text>

            <Heading as='h2' size='xl' mt={10}>Key Features:</Heading>
            <List mt={4} spacing={2}>
              <ListItem>User registration and login for making donations.</ListItem>
              <ListItem>Admin tracking of all donations and generating reports.</ListItem>
              <ListItem>Management of food inventory, including adding, updating, and deleting items.</ListItem>
              <ListItem>Logging the receipt and distribution of food items.</ListItem>
              <ListItem>User tracking of food distribution.</ListItem>
              <ListItem>Integration with Stripe for secure payment processing.</ListItem>
              <ListItem>Responsive and mobile-friendly design.</ListItem>
            </List>

            <Heading as='h2' size='xl' mt={10}>Technologies Used:</Heading>
            <List mt={4} spacing={2}>
              <ListItem>React for the front end.</ListItem>
              <ListItem>GraphQL with a Node.js and Express.js server.</ListItem>
              <ListItem>MongoDB and the Mongoose ODM for the database.</ListItem>
              <ListItem>JWT for authentication.</ListItem>
            </List>

            <Text mt={10}>
              We are committed to supporting food banks in their vital work and are constantly working to enhance our platform. If you have any questions or feedback, please don't hesitate to contact us.
            </Text>
          </Container>
        </Box>
        <Flex>
          <Image
            src={'../../images/foodbank-about.png'}
            alt={'AboutUs Image'}
            w="400px"
            objectFit={'cover'}
          />
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default AboutUs;
