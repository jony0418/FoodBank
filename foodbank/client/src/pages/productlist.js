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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../components/utils/queries';


function ProductList() {
  const {loading, data} = useQuery(GET_PRODUCTS);
  const products = data?.products || [];
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

      <Flex justifyContent='center' mt={4}>
        <Button as={Link} to='/additem' colorScheme='green'>
          Add New Item
        </Button>
      </Flex>
    </div>
  );
}

export default ProductList;
