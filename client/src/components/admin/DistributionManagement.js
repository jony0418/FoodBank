import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Box, Flex, Input, Button, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { UPDATE_PRODUCT_QUANTITY, CREATE_TRANSACTION } from "../utils/mutations";

const FIND_PRODUCT = gql`
  query GetProducts {
    products {
      name
    }
  }
`;

function Distribution() {
  const [updateProductQuantity] = useMutation(UPDATE_PRODUCT_QUANTITY);
  const [createTransaction] = useMutation(CREATE_TRANSACTION);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [families, setFamilies] = useState('');
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");
  const [suggestions, setSuggestions] = useState([]);
  const { data } = useQuery(FIND_PRODUCT);

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

  const handleAddProduct = () => {
    if (productName && productQuantity) {
      setProducts([...products, { name: productName, quantity: productQuantity }]);
      setProductName('');
      setProductQuantity('');
    }
  };

  const handleDistribute = async () => {
    // Loop through products, multiply by the number of families, and update the quantity
    for (const product of products) {
      const totalQuantity = product.quantity * families;

      // Update the product's quantity
      await updateProductQuantity({
        variables: {
          id: product.id,
          quantity: totalQuantity,
        },
      });

      // Create a new transaction
      await createTransaction({
        variables: {
          input: {
            product: product,
            transaction_date: new Date(),
            purpose: 'out',
            batch: totalQuantity.toString(),
            batchSize: totalQuantity.toString(),
            operation: 'Distribute',
          },
        },
      });
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
        <Flex style={right} bg={bg} borderRadius="md" flex="1" color={color} direction="row">
          <Box flex="1" bg={bg} borderRadius="md">
            <Text mb={4}>Add Products:</Text>
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
              placeholder="Enter product quantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              type="number"
              mt={2}
            />
            <Button onClick={handleAddProduct} mt={2}>
              Add Product
            </Button>
            <List spacing={3}>
              {products.map((product, index) => (
                <ListItem key={index}>
                  {product.name} - Quantity: {product.quantity}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box flex="1" bg={bg} borderRadius="md">
            <Text mb={4}>Number of Families:</Text>
            <Input
              placeholder="Enter number of families"
              value={families}
              onChange={(e) => setFamilies(e.target.value)}
              type="number"
            />
            <Button onClick={handleDistribute} mt={2}>
              Distribute
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default Distribution;
