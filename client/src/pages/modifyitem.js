import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { InputGroup, Input, InputLeftAddon, Button, Flex, Box, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import { updateProduct } from '../components/utils/mutations';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
    }
  }
`;

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
  const bg = useColorModeValue("white", "gray.800"); // Define background color
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

  const [modifyProductMutation] = useMutation(updateProduct);
  const [suggestions, setSuggestions] = useState([]);
  const { loading: loadingProducts, data: productsData } = useQuery(GET_PRODUCTS);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchName(value);

    if (value && productsData) {
      const filteredProducts = productsData.products.filter((product) =>
        product.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredProducts.map((product) => product.name));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchName(suggestion);
    setSuggestions([]);
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
          <InputGroup>
            <InputLeftAddon children='Search by Name' />
            <Input
              placeholder='Product name'
              value={searchName}
              onChange={handleSearchChange}
            />
            <Button onClick={handleSearchClick}>Search</Button>
          </InputGroup>

          {suggestions.length > 0 && (
            <List>
              {suggestions.map((suggestion, index) => (
                <ListItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </ListItem>
              ))}
            </List>
          )}

          {data && data.product && (
            <Box mt={4}>
              <InputGroup>
                <InputLeftAddon children='Name' />
                <Input
                  value={inputValues.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftAddon children='Description' />
                <Input
                  value={inputValues.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftAddon children='Image' />
                <Input
                  value={inputValues.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftAddon children='Quantity' />
                <Input
                  value={inputValues.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  type="number"
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftAddon children='Category' />
                <Input
                  value={inputValues.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                />
              </InputGroup>
              <Button mt={2} onClick={handleModifyItem}>
                Modify Item
              </Button>
            </Box>
          )}

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default ModifyItem;
