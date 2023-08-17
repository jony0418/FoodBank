import React from 'react'
import { Stack, InputGroup, Input, InputLeftAddon } from '@chakra-ui/react';

function AddItem () {
    return ( 
<Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children='id' />
    <Input placeholder='item id' />
  </InputGroup>

  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}

  <InputGroup>
    <InputLeftAddon children='name' />
    <Input placeholder='item name' />
  </InputGroup>

  <InputGroup>
    <InputLeftAddon children='measuring units' />
    <Input placeholder='pieces/kg/etc' />
  </InputGroup>

  <InputGroup>
    <InputLeftAddon children='category' />
    <Input placeholder='fruit/legume/etc' />
  </InputGroup>

  <InputGroup>
    <InputLeftAddon children='family' />
    <Input placeholder='???' />
  </InputGroup>

</Stack>
    )}


export default AddItem;