import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { Stack, InputGroup, Input, InputLeftAddon, Button, Flex } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../components/utils/queries';
import { updateProduct } from '../components/utils/mutations'; 


function Modify() {

  const location= useLocation()
  const navigate = useNavigate(); 
  const productId = location.state.productId;
  const [updateProductMutation] = useMutation(updateProduct); 

  const {loading, data} = useQuery(GET_PRODUCT, {
    variables: {
      productId: productId,
    },
  }); 

  const product = data?.product || {};

  const inputLeftAddonStyle = {
    width: '150px', // Adjust the width as needed
  };

  const [inputValues, setInputValues] = useState({
    name: product.name || '',
    description: product.description || '',
    quantity: product.quantity || '',
  });

  const handleInputChange = (fieldName, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleModifyItem = async () => {
    try {
      const { data } = await updateProductMutation({
        variables: {
          productId: productId,
          description: inputValues.description,
          name: inputValues.name,
          quantity: parseInt(inputValues.quantity),
        },
      }); 
      
      console.log('Input values:', inputValues);

      window.location.replace('/productlist'); 
    } catch (error) {
      console.error('Mutation error:', error); 
    }

  };

  const buttonStyle = {
    width: '100px', // Adjust the width as needed
  };

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftAddon style={inputLeftAddonStyle} children='Name' />
        <Input
          placeholder={product.name}
          value={inputValues.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon style={inputLeftAddonStyle} children='Description' />
        <Input
          placeholder={product.description}
          value={inputValues.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon style={inputLeftAddonStyle} children='Quantity' />
        <Input
          placeholder={product.quantity}
          value={inputValues.quantity}
          onChange={(e) => handleInputChange('quantity', e.target.value)}
        />
      </InputGroup>
      {/* Other input fields */}
      <Flex justifyContent='center'>
        <Button size='sm'
         colorScheme='green' 
         style={buttonStyle} 
         onClick={handleModifyItem}>
          Modify Item
        </Button>
      </Flex>
    </Stack>
  );
}

export default Modify;