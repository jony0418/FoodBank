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
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>0.91444</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </div> 
    )
}

export default productlist;