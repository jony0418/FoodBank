import React, { useState } from 'react';
import { Stack, InputGroup, Input, InputLeftAddon, Button } from '@chakra-ui/react';

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

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftAddon style={inputLeftAddonStyle} children='id' />
        <Input
          placeholder='item id'
          value={inputValues.id}
          onChange={(e) => handleInputChange('id', e.target.value)}
        />
      </InputGroup>

      {/* Repeat the above pattern for other input groups */}
      
      <Button size="sm" colorScheme="blue" onClick={handleAddItem}>
        Add Item
      </Button>
    </Stack>
  );
}

export default AddItem;
