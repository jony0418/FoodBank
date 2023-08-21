import React from 'react';
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
<<<<<<< HEAD:foodbank/client/src/pages/productlist.js
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../components/utils/queries';


function ProductList() {
  const {loading, data} = useQuery(GET_PRODUCTS);
  const products = data?.products || [];
=======
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';

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

  const fcontstyle = {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "30px"
  };

  const right = {
    padding: "25px",
    flex: "80%"
  }

>>>>>>> 77b9e7ad34b74d622b0cbb124a7801b3c53a9710:client/src/components/admin/InventoryManagement.js
  return (
    <div className='productlist'>
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
                <Link to={`/modifyitem/${product._id}`}>
                  Modify
                </Link>
                </Td>
              </Tr>
            ))}
           
          </Tbody>
        </Table>
      </TableContainer>

<<<<<<< HEAD:foodbank/client/src/pages/productlist.js
      <Flex justifyContent='center' mt={4}>
        <Button as={Link} to='/additem' colorScheme='green'>
          Add New Item
        </Button>
=======
      <Flex as="main" style={fcontstyle} flex="1" p={4}>
        <Sidebar />
        <Box style={right} bg={bg} borderRadius="md" flex="1" color={color}>
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
>>>>>>> 77b9e7ad34b74d622b0cbb124a7801b3c53a9710:client/src/components/admin/InventoryManagement.js
      </Flex>
    </div>
  );
}

export default InventoryManagement;

