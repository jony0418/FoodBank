'use client'

import { Button, Checkbox, Flex, Text, FormControl, FormLabel, Heading, Input, Stack, Image, Box, Link} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'


export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
          <Box>
        New to us?{" "}
        <Link color="teal.500" href="#" as={ReactRouterLink} to= '/register'>
          Sign Up
        </Link>
      </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
           src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
          alt={'Login Image'}
          objectFit={'cover'}
        />
      </Flex>
    </Stack>
  )
}