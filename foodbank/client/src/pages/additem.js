// import React from 'react'
// import { Stack, InputGroup, Input, InputLeftAddon } from '@chakra-ui/react';

// function AddItem () {
//     const inputLeftAddonStyle = {
//       width: '150px', // Adjust the width as needed
//     }

// return ( 
// <Stack spacing={4}>
//   <InputGroup>
//     <InputLeftAddon style={inputLeftAddonStyle} children='id' />
//     <Input placeholder='item id' />
//   </InputGroup>

//   {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}

//   <InputGroup>
//     <InputLeftAddon style={inputLeftAddonStyle} children='name' />
//     <Input placeholder='item name' />
//   </InputGroup>

//   <InputGroup>
//     <InputLeftAddon style={inputLeftAddonStyle} children='measuring units' />
//     <Input placeholder='pieces/kg/etc' />
//   </InputGroup>

//   <InputGroup>
//     <InputLeftAddon style={inputLeftAddonStyle} children='category' />
//     <Input placeholder='fruit/legume/etc' />
//   </InputGroup>

//   <InputGroup>
//     <InputLeftAddon style={inputLeftAddonStyle} children='family' />
//     <Input placeholder='???' />
//   </InputGroup>

// </Stack>
//     )}


// export default AddItem;

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
      
      <Button colorScheme="blue" onClick={handleAddItem}>
        Add Item
      </Button>
    </Stack>
  );
}

export default AddItem;
