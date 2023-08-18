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

function ProductList() {
  return (
    <div className='productlist'>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Image</Th>
              <Th>Quantity</Th>
              <Th>Category</Th>
              <Th>Modify Item</Th>
              <Th>Delete Item</Th> {/* New column */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
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
              </Tr>
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

