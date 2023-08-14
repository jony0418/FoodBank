import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function productlist () {
    return ( 
    <div className='productlist'>
        <div className='intro'>
            <h1>placeholder header</h1>
            <div className='phrase'><p>placeholder phrase</p></div>
        </div>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'>Inventory</Heading>
    </CardHeader>
    <CardBody>
      <Text>View all items currently in the inventory.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Name of item</Heading>
    </CardHeader>
    <CardBody>
      <Text>quantity, measuring units, category, description, date</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Name of item</Heading>
    </CardHeader>
    <CardBody>
    <Text>quantity, measuring units, category, description, date</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    </div> 
    )
}

export default productlist;