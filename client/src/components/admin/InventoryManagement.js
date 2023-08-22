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
  Icon
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { MdOutlineModeEdit } from 'react-icons/md'; 

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

function InventoryManagement() {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.200");

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

      <Flex as="main" flex="1" flexWrap= "wrap" p={4}>
        <Sidebar />
        <Box bg={bg} borderRadius="md" flex="1" ml={4} p={5} color={color}>
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
                      <Link to={`/modifyitem/${product._id}`}>
                      <Icon as={MdOutlineModeEdit} />
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

export default InventoryManagement;
