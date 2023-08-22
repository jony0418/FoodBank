import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Box, Flex, Input, Button, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { useNavigate } from "react-router-dom";
import { UPDATE_PRODUCT_QUANTITY, CREATE_TRANSACTION } from "../utils/mutations";
import { sendDataDistribution } from "../utils/api";

const FIND_PRODUCT = gql`
  query GetProducts {
    products {
      name,
      _id
    }
  }
`;

function Distribution() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productId, setIdProduct] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [purpose, setPurpose] = useState('');
  const [batch, setBatch] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [doneMessage, setDoneMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");
  const [suggestions, setSuggestions] = useState([]);
  const { data } = useQuery(FIND_PRODUCT);
  const navigate = useNavigate();

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    const thisId = e.target.id;
    setProductName(value);
    setIdProduct(thisId);

    if (value && data) {
      const filteredProducts = data.products.filter((product) =>
        product.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredProducts.map((product) => { return { name: product.name, _id: product._id } }));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setProductName(suggestion.name);
    setIdProduct(suggestion._id);
    setSuggestions([]);
  };

  const handleAddProduct = () => {

    if (productName && productQuantity && productId) {
      setProducts([...products, { name: productName, quantity: productQuantity, _id: productId }]);
      console.log(products);
      setProductName('');
      setProductQuantity('');
      setIdProduct('');
    }
  };

  useEffect(() => {
    if (doneMessage) {
      const timer = setTimeout(() => {
        setDoneMessage('');
        if (products && unit && purpose && batch) {
          setProductName('');
          setProductQuantity('');
          setIdProduct('');
          setUnit('');
          setPurpose('');
          setBatch('');
          setIsButtonDisabled(false);
          navigate('/dashboard');
        }
      }, 3000);

      return () => { clearTimeout(timer); };
    }
  }, [doneMessage]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 3000);

      return () => { clearTimeout(timer); };
    }
  }, [errorMessage]);


  const handleDistribute = async () => {
    // Loop through products, multiply by the number of families, and update the quantity

    if (products && unit && purpose && batch) {
      // console.log(products)
      setIsButtonDisabled(true);

      const transaction = {
        product: products,
        purpose: purpose,
        unit: unit,
        batchSize: batch
      }

      await sendDataDistribution(transaction);


      setDoneMessage('Transaction submitted successfully!');
    } else {
      setErrorMessage('Complete the transaction information before submiting');
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
          <Box flex="1" bg={bg} borderRadius="md" marginEnd='5px'>
            <Text mb={4}>Add Products:</Text>
            <Input
              placeholder="Type product name"
              value={productName}
              id={productId}
              onChange={handleProductNameChange}
            />
            {suggestions.length > 0 && (
              <List>
                {suggestions.map((suggestion, index) => (
                  <ListItem key={index} id={suggestion._id} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion.name}
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
            <Text mb={4}>Transaction Info:</Text>
            <Input
              placeholder="Enter number of units"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              type="number"
            />
            <Input
              placeholder="Purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              type="text"
            />
            <Input
              placeholder="Batch Size"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              type="text"
            />
            <Button onClick={handleDistribute} mt={2} disabled={isButtonDisabled}>
              Distribute
            </Button>
            {
              errorMessage && (
                <Text mb={4} className='error-text'>{errorMessage}</Text>
              )
            }
            {
              doneMessage && (
                <Text mb={4} className='done-text'>{doneMessage}</Text>
              )
            }


          </Box>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default Distribution;
