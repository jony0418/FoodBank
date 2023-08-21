import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Input, Button, Flex, Box, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
    }
  }
`;

const SUBTRACT_PRODUCT_QUANTITY = gql`
  mutation SubtractProductQuantity($name: String!, $quantity: Int!) {
    subtractProductQuantity(name: $name, quantity: $quantity) {
      name
      quantity
    }
  }
`;

function RegisterProductOutput() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");
  const [productName, setProductName] = useState('');
  const [outputQuantity, setOutputQuantity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { data } = useQuery(GET_PRODUCTS);
  const [subtractProductQuantity] = useMutation(SUBTRACT_PRODUCT_QUANTITY);

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    if (value && data) {
      const filteredProducts = data.products.filter((product) =>
        product.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredProducts.map((product) => product.name));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setProductName(suggestion);
    setSuggestions([]);
  };

  const handleSubtractQuantity = async () => {
    try {
      await subtractProductQuantity({
        variables: {
          name: productName,
          quantity: parseInt(outputQuantity),
        },
      });
      setProductName('');
      setOutputQuantity('');
    } catch (error) {
      console.error('Error subtracting product quantity:', error);
    }
  };

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
          <Input
            placeholder="Type product name"
            value={productName}
            onChange={handleProductNameChange}
          />
          {suggestions.length > 0 && (
            <List>
              {suggestions.map((suggestion, index) => (
                <ListItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </ListItem>
              ))}
            </List>
          )}
          <Input
            placeholder="Enter output quantity"
            value={outputQuantity}
            onChange={(e) => setOutputQuantity(e.target.value)}
            type="number"
            mt={2}
          />
          <Button onClick={handleSubtractQuantity} mt={2}>
            Subtract Quantity
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default RegisterProductOutput;
