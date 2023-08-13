// DonationForm.js
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const DonationForm = () => {
  return (
    <Box maxW="400px" mx="auto" mt="4">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Make a Difference with Your Donation
      </Text>
      <Text mb="4">
        Your financial donation helps us support those in need. Every
        contribution matters.
      </Text>
      <FormControl>
        <FormLabel>Select an Amount</FormLabel>
        <Button colorScheme="blue" size="sm" m="1" mb="2">
          $25
        </Button>
        <Button colorScheme="blue" size="sm" m="1" mb="2">
          $50
        </Button>
        <Button colorScheme="blue" size="sm" m="1" mb="2">
          $70
        </Button>
        <Button colorScheme="blue" size="sm" m="1" mb="2">
          $100
        </Button>
        <Input
          type="number"
          placeholder="Other amount $"
          size="sm"
          variant="outline"
          m="1"
          mb="4"
        />
      </FormControl>
    </Box>
  );
};

export default DonationForm;
