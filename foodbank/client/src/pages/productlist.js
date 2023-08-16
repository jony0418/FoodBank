import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  
function productlist () {
    return ( 
    <div className='productlist'>
   <TableContainer>
  <Table variant='simple'>
    <TableCaption>Inventory</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Quantity</Th>
        {/* <Th isNumeric> */}
        <Th>Measuring unit</Th>
        <Th>Category</Th>
        <Th>Family</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>placeholder </Td>
        <Td>placeholder </Td>
        <Td>placeholder</Td>
      </Tr>
      <Tr>
        <Td>placeholder</Td>
        <Td>placeholder</Td>
        <Td>placeholder</Td>
      </Tr>
      <Tr>
        <Td>placeholder</Td>
        <Td>placeholder</Td>
        <Td>placeholder</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </div> 
    )
}

export default productlist;