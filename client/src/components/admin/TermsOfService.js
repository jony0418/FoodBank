import React from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'; // Import useColorModeValue
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

function TermsOfService() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");
  
  const fcontstyle = {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "30px"
  };

  const right = {
    padding: "25px",
    flex: "80%"
  }  

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      <Flex as="main" style={fcontstyle} flex="1" p={4}>
        <Sidebar />
        <Box style={right} bg={bg} borderRadius="md" flex="1" color={color}> {/* Apply the bg and color */}
          <Text fontSize="xl" fontWeight="bold">Terms of Service</Text>
          <Text mt={4}>
            Welcome to FoodBank. These Terms of Service govern your use of our services. Please read these Terms carefully.
          </Text>
          <Text mt={4}>
            <strong>1. Acceptance of Terms</strong>
            <Text mt={2}>
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>2. Registration and Account Security</strong>
            <Text mt={2}>
              You must provide accurate information when creating an account. You are responsible for maintaining the security of your account.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>3. Donations and Payments</strong>
            <Text mt={2}>
              Donations made through our platform are subject to our Donation Policy. We use Stripe for payment processing.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>4. Content and Conduct</strong>
            <Text mt={2}>
              You must comply with all applicable laws and regulations while using our services.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>5. Termination</strong>
            <Text mt={2}>
              We may terminate or suspend your access to our services at our sole discretion, without prior notice or liability.
            </Text>
          </Text>
          {/* ... other terms ... */}
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default TermsOfService;
