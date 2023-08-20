import React from 'react';
import { Box, Flex, Text, List, ListItem } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

function AboutUs() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      <Flex as="main" flex="1" p={4}>
        <Sidebar />
        <Box flex="1" ml={4} p={5} bg="gray.100" borderRadius="md">
          <Text fontSize="xl" fontWeight="bold">About Us</Text>
          <Text mt={4}>
            Welcome to FoodBank, a platform designed to streamline the process of receiving donations and managing food inventory and distribution for food banks.
          </Text>
          <Text mt={4}>
            <strong>Our Mission:</strong>
            <Text mt={2}>
              To provide an efficient and user-friendly solution for food banks, enabling them to focus on their core mission of feeding those in need.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>Key Features:</strong>
            <List mt={2} spacing={2}>
              <ListItem>User registration and login for making donations.</ListItem>
              <ListItem>Admin tracking of all donations and generating reports.</ListItem>
              <ListItem>Management of food inventory, including adding, updating, and deleting items.</ListItem>
              <ListItem>Logging the receipt and distribution of food items.</ListItem>
              <ListItem>User tracking of food distribution.</ListItem>
              <ListItem>Integration with Stripe for secure payment processing.</ListItem>
              <ListItem>Responsive and mobile-friendly design.</ListItem>
              {/* ... other features ... */}
            </List>
          </Text>
          <Text mt={4}>
            <strong>Technologies Used:</strong>
            <List mt={2} spacing={2}>
              <ListItem>React for the front end.</ListItem>
              <ListItem>GraphQL with a Node.js and Express.js server.</ListItem>
              <ListItem>MongoDB and the Mongoose ODM for the database.</ListItem>
              <ListItem>JWT for authentication.</ListItem>
              {/* ... other technologies ... */}
            </List>
          </Text>
          <Text mt={4}>
            We are committed to supporting food banks in their vital work and are constantly working to enhance our platform. If you have any questions or feedback, please don't hesitate to contact us.
          </Text>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default AboutUs;