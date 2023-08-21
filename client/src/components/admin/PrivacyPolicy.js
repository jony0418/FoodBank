import React from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

function PrivacyPolicy() {
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
        <Box style={right} bg={bg} borderRadius="md" flex="1" color={color}>
          <Text fontSize="xl" fontWeight="bold">Privacy Policy</Text>
          <Text mt={4}>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </Text>
          <Text mt={4}>
            <strong>1. Information Collection</strong>
            <Text mt={2}>
              We may collect personal information such as your name, email address, payment information, and other details you provide when registering or making a donation.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>2. Use of Information</strong>
            <Text mt={2}>
              We may use your information to process donations, send newsletters, respond to inquiries, and improve our services.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>3. Sharing of Information</strong>
            <Text mt={2}>
              We may share your information with third-party service providers, such as payment processors, as necessary to provide our services.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>4. Security</strong>
            <Text mt={2}>
              We implement reasonable security measures to protect your information, but we cannot guarantee absolute security.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>5. Cookies and Tracking</strong>
            <Text mt={2}>
              We may use cookies and similar tracking technologies to analyze usage and improve our services.
            </Text>
          </Text>
          <Text mt={4}>
            <strong>6. Changes to This Policy</strong>
            <Text mt={2}>
              We may updatee this Privacy Policy from time to time. We encourage you to review this Policy periodically.
            </Text>
          </Text>
          {/* ... other privacy terms ... */}
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default PrivacyPolicy;
