import React, { useState } from 'react';
import { Box, Flex, Input, Button, Text, List, ListItem } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

function Distribution() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [families, setFamilies] = useState('');

  const handleAddProduct = () => {
    if (productName && productQuantity) {
      setProducts([...products, { name: productName, quantity: productQuantity }]);
      setProductName('');
      setProductQuantity('');
    }
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      
      <Flex as="main" flex="1" p={4}>
        <Sidebar />
        <Flex flex="1" ml={4} p={5} bg="gray.100" borderRadius="md" direction="row">
          <Box flex="1" p={5} bg="gray.100" borderRadius="md">
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
          <Box flex="1" ml={4} p={5} bg="gray.100" borderRadius="md">
            <Text mb={4}>Number of Families:</Text>
            <Input
              placeholder="Enter number of families"
              value={families}
              onChange={(e) => setFamilies(e.target.value)}
              type="number"
            />
          </Box>
        </Flex>
      </Flex>
      
      <Footer />
    </Flex>
  );
}

export default Distribution;
