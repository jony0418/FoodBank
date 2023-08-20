import React from 'react';
import { useQuery } from '@apollo/client';
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

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
                  <Th>Description</Th>
                  <Th>Image</Th>
                  <Th>Quantity</Th>
                  <Th>Modify Item</Th>
                  <Th>Delete Item</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.products.map(product => (
                  <Tr key={product._id}>
                    <Td>{product.name}</Td>
                    <Td>{product.description}</Td>
                    <Td>{product.image}</Td>
                    <Td>{product.quantity}</Td>
                    <Td>
                      <Link to={`/modifyitem/${product._id}`}>Modify</Link>
                    </Td>
                    <Td>
                      <FaTrash color='red' cursor='pointer' />
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
