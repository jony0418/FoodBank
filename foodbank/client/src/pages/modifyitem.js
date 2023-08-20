import React, { useState } from 'react';
import { Stack, InputGroup, Input, InputLeftAddon, Button, Flex, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../components/utils/queries';

function ModifyItem() {
const {loading, data} = useQuery(GET_PRODUCT);
const product = data?.product || [];

  const inputLeftAddonStyle = {
    width: '150px', // Adjust the width as needed
  };

  const [inputValues, setInputValues] = useState({
    name: '',
    quantity: '',
    category: '',
  });

  const handleInputChange = (fieldName, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleAddItem = () => {
    // You can perform further actions with the input values here
    console.log('Input values:', inputValues);
  };

  const buttonStyle = {
    width: '100px', // Adjust the width as needed
  };

  const {productId}= useLocation()
  console.log(productId);

  return (
    <Stack spacing={4}>
      <Box>{product._id}</Box>
        {/* <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='id' />
          <Input
            placeholder={product._id}
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup> */}
      
        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='name' />
          <Input
            placeholder='item name'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='quantity' />
          <Input
            placeholder='pieces/kg/etc'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='category' />
          <Input
            placeholder='fruit/legume/etc'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>

      {/* Repeat the above pattern for other input groups */}
      
      <Flex justifyContent="center">
        <Button size="sm" colorScheme="green" style={buttonStyle} onClick={handleAddItem}>
          Modify Item
        </Button>
      </Flex>
    </Stack>
  );
}

export default ModifyItem;
