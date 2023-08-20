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
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Quantity</Th>
              <Th>Description</Th>
              <Th>Image</Th>
              {/* <Th>Modify Item</Th>
              <Th>Delete Item</Th> New column */}
            </Tr>
          </Thead>
          <Tbody>
            {products.map ((product,i)=>(
              <Tr> 
                <Td>
                <Link to={`/modifyitem/${product._id}`}>
                  {product._id}
                  </Link>
                </Td>
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
                  {product.image}
                </Td>
              </Tr>
            ))}
            {/* <Tr>
              <Td>Apple</Td>
              <Td>Green apples</Td>
              <Td>Image here</Td>
              <Td>10</Td>
              <Td>Fruit</Td>
              <Td>
                <Link to='/modifyitem'>Modify</Link>
              </Td>
              <Td>
              <FaTrash color='red' cursor='pointer' />              </Td>
            </Tr>
            <Tr>
            <Td>Rice</Td>
            <Td>Brown rice</Td>
            <Td>Image here</Td>
            <Td>7</Td>
            <Td>Legumes</Td>
            <Td>
                <Link to='/modifyitem'>Modify</Link>
              </Td>
              <Td>
              <FaTrash color='red' cursor='pointer' />              </Td>
            </Tr>
            <Tr>
            <Td>Canned beans</Td>
            <Td>Pinto beans in a can</Td>
            <Td>Image here</Td>
            <Td>10</Td>
            <Td>Legumes</Td>
              <Td>
                <Link to='/modifyitem'>Modify</Link>
              </Td>
              <Td>
              <FaTrash color='red' cursor='pointer' />              </Td>
              </Tr> */}
            {/* ... Other rows ... */}
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

