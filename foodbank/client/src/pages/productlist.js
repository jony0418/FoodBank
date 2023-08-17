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
        <Th>Description</Th>
        <Th>Id</Th>
        <Th>Quantity</Th>
        {/* <Th isNumeric> */}
        <Th>Measuring unit</Th>
        <Th>Category</Th>
        <Th>Family</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Apple </Td>
        <Td>IdNumber </Td>
        <Td>3</Td>
        <Td>Pieces</Td>
        <Td>Fruit</Td>
        <Td>8</Td>
      </Tr>
      <Tr>
        <Td>Rice</Td>
        <Td>IdNumber</Td>
        <Td>7</Td>
        <Td>Pieces</Td>
        <Td>Legumes</Td>
        <Td>10</Td>
      </Tr>
      <Tr>
        <Td>Canned beans</Td>
        <Td>IdNumber</Td>
        <Td>13</Td>
        <Td>Pieces</Td>
        <Td>Legumes</Td>
        <Td>9</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </div> 
    )
}

export default productlist;