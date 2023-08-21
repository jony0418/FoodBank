import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Box, Flex, Input, Button, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { UPDATE_PRODUCT_QUANTITY, CREATE_TRANSACTION } from "../utils/mutations";

function Distribution() {
  const [updateProductQuantity] = useMutation(UPDATE_PRODUCT_QUANTITY);
  const [createTransaction] = useMutation(CREATE_TRANSACTION);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [families, setFamilies] = useState('');
  const bg = useColorModeValue("white", "gray.800");

  const handleAddProduct = () => {
    if (productName && productQuantity) {
      setProducts([...products, { name: productName, quantity: productQuantity }]);
      setProductName('');
      setProductQuantity('');
    }
  };

  const handleDistribute = async () => {
    // Loop through products and update the quantity
    for (const product of products) {
      await updateProductQuantity({
        variables: {
          id: product.id,
          quantity: product.quantity,
        },
      });
    }

    // Create a new transaction
    await createTransaction({
      variables: {
        input: {
          product: products,
          transaction_date: new Date(),
          operation: 'Distribute',
        },
      },
    });
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      <Flex as="main" flex="1" p={4}>
        <Sidebar />
        <Flex flex="1" ml={4} p={5} bg={bg} borderRadius="md" direction="row">
          <Box flex="1" p={5} bg={bg} borderRadius="md">
            <Text mb={4}>Add Products:</Text>
            <Input
              placeholder="Type product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
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
          <Box flex="1" ml={4} p={5} bg={bg} borderRadius="md">
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
