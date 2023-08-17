import React from 'react'

<Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children='+234' />
    <Input type='tel' placeholder='phone number' />
  </InputGroup>

  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
  <InputGroup size='sm'>
    <InputLeftAddon children='https://' />
    <Input placeholder='mysite' />
    <InputRightAddon children='.com' />
  </InputGroup>
</Stack>

export default additem;