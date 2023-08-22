import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';

const GET_PRODUCTS = gql`
query {
  products {
    _id
    name
    description
    image
    quantity
    }
  }
`;

//import mutation for deleting a product
const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {   
    deleteProduct(id: $id) {
      _id
    }
  }
`;

function ProductList() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");
  const products = data?.products || []; 

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //handle product delete using mutation
  const handleDelete = async (productId) => {
    try {
      await deleteProduct({
        variables: { id: productId },
        refetchQueries: [{ query: GET_PRODUCTS }],
      }); 
    } catch (err) {
      console.error(err); 
    }
  }; 
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex as="main" flex="1" p={4}>
        <Sidebar />
        <Box flex="1" ml={4} p={5} bg="gray.100" borderRadius="md">
        <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Quantity</Th>
              <Th>Description</Th>
              <Th>Modify Item</Th>
              <Th>Delete Item</Th>
            </Tr>
          </Thead>
         <Tbody>
            {products.map ((product,i)=>(
              <Tr>
                <Td>
                  {product.name}
                </Td>
                <Td>
                  {product.quantity}
                </Td>
                <Td>
                  {product.description}
                </Td>
                <Td>
                <Link to={`/modifyitem/${product._id}`} state={{ productId: product._id }}>
                  Modify
                </Link>
                </Td>
                    <Td>
                      <FaTrash 
                      color='red' 
                      cursor='pointer' 
                      onClick={() => handleDelete(product._id)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent='center' mt={4}>
            <Button as={Link} to='/additem' colorScheme='green'>
              Add New Item
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default ProductList;
