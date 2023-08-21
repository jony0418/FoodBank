import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { InputGroup, Input, InputLeftAddon, Button, Flex, Box, useColorModeValue } from '@chakra-ui/react'; // Import useColorModeValue
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import { modifyProduct } from '../components/utils/mutations';

const GET_PRODUCT_BY_NAME = gql`
  query GetProductByName($name: String!) {
    product(name: $name) {
      _id
      name
      description
      image
      quantity
      category
    }
  }
`;

function ModifyItem() {
  const bg = useColorModeValue("gray.100", "gray.800"); // Define background color
  const color = useColorModeValue("gray.700", "gray.200"); // Define text color

  const inputLeftAddonStyle = {
    width: '150px',
  };

  const [searchName, setSearchName] = useState('');
  const [inputValues, setInputValues] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    quantity: '',
    category: '',
  });

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_NAME, {
    variables: { name: searchName },
    skip: !searchName,
  });

  const [modifyProductMutation] = useMutation(modifyProduct);

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchClick = () => {
    if (data && data.product) {
      setInputValues(data.product);
    }
  };

  const handleInputChange = (fieldName, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleModifyItem = async () => {
    try {
      const { data } = await modifyProductMutation({
        variables: {
          ...inputValues,
          quantity: parseInt(inputValues.quantity),
        },
      });
      console.log('Product modified:', data.modifyProduct);
    } catch (error) {
      console.error('Error modifying product:', error);
    }
  };

  const buttonStyle = {
    width: '100px',
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      <Flex as="main" flex="1" p={4}>
        <Sidebar />
        <Box flex="1" ml={4} p={5} bg={bg} borderRadius="md" color={color}> {/* Apply the bg and color */}
          <InputGroup>
            <InputLeftAddon children='Search by Name' />
            <Input
              placeholder='Product name'
              value={searchName}
              onChange={handleSearchChange}
            />
            <Button onClick={handleSearchClick}>Search</Button>
          </InputGroup>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          {/* Add InputGroup components for other fields here */}
          {/* ... */}

          <Flex justifyContent="center">
            <Button size="sm" colorScheme="green" style={buttonStyle} onClick={handleModifyItem}>
              Modify Item
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default ModifyItem;
