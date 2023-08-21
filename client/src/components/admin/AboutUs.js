import React from 'react';
import { Box, Flex, Text, List, ListItem, Image, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

function AboutUs() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");

  const fcontstyle = {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "30px"
  };

  const right = {
    padding: "25px",
    flex: "60%"
  }
  
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      <Flex as="main" style={fcontstyle} flex="1" p={4}>
        <Sidebar/>
        <Box style={right} bg={bg} borderRadius="md" flex="1" color={color}>
          <Container maxWidth={'50%'} mt={10} flex="1">

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
              <ListItem fontSize='md'>User registration and login for making donations.</ListItem>
              <ListItem fontSize='md'>Admin tracking of all donations and generating reports.</ListItem>
              <ListItem fontSize='md'>Management of food inventory, including adding, updating, and deleting items.</ListItem>
              <ListItem fontSize='md'>Logging the receipt and distribution of food items.</ListItem>
              <ListItem fontSize='md'>User tracking of food distribution.</ListItem>
              <ListItem fontSize='md'>Integration with Stripe for secure payment processing.</ListItem>
              <ListItem fontSize='md'>Responsive and mobile-friendly design.</ListItem>
            </List>

            <Heading as='h2' size='xl' mt={10}>Technologies Used:</Heading>
            <List mt={4} spacing={2}>
              <ListItem fontSize='md'>React for the front end.</ListItem>
              <ListItem fontSize='md'>GraphQL with a Node.js and Express.js server.</ListItem>
              <ListItem fontSize='md'>MongoDB and the Mongoose ODM for the database.</ListItem>
              <ListItem fontSize='md'>JWT for authentication.</ListItem>
            </List>

            <Text mt={10}>
              We are committed to supporting food banks in their vital work and are constantly working to enhance our platform. If you have any questions or feedback, please don't hesitate to contact us.
            </Text>
          </Container>        
        </Box>
        <Container maxWidth='20%' flex="20%">
          <Image
            src={'../../images/foodbank-about.png'}
            alt={'AboutUs Image'}
            objectFit={'cover'}
            height="100%"
          />
        </Container>    
      </Flex>

      <Footer />
    </Flex>
  );
}

export default AboutUs;
  
