
import React, { useState } from 'react';
import { Stack, InputGroup, Input, InputLeftAddon, Button, Flex } from '@chakra-ui/react';

function AddItem() {
  const inputLeftAddonStyle = {
    width: '150px', // Adjust the width as needed
  };

  const [inputValues, setInputValues] = useState({
    id: '',
    name: '',
    measuringUnits: '',
    category: '',
    family: '',
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

  return (
    <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='name' />
          <Input
            placeholder='item name'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='description' />
          <Input
            placeholder='item description'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='image' />
          <Input
            placeholder='image'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='quantity' />
          <Input
            placeholder='how many'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon style={inputLeftAddonStyle} children='category' />
          <Input
            placeholder='fruit/legumes/etc'
            value={inputValues.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
          />
        </InputGroup>


      {/* Repeat the above pattern for other input groups */}
      
      <Flex justifyContent="center">
        <Button size="sm" colorScheme="green" style={buttonStyle} onClick={handleAddItem}>
          Add Item
        </Button>
      </Flex>
    </Stack>
  );
}

export default AddItem;


