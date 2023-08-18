'use client'

import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useMutation} from '@apollo/client';
import { addUser } from '../utils/mutations';


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate(); 

  const [newUser, { error }] = useMutation(addUser);
  const [userState, setuserState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Execute mutation and pass in defined parameter data as variables
      const { data } = await newUser({
        variables: { ...userState },
      });
      navigate('/'); 
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setuserState({ ...userState, [name]: value });
        break;
      case "email":
        setuserState({ ...userState, [name]: value });
        break;
      case "password":
        setuserState({ ...userState, [name]: value });
        break;
      default:
        break;
    }

    // if (name === 'thoughtText' && value.length <= 280) {
    //   setFormState({ ...formState, [name]: value });
    //   setCharacterCount(value.length);
    // } else if (name !== 'thoughtText') {
    //   setFormState({ ...formState, [name]: value });
    // }
  };


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      backgroundImage="../../images/reg3.jpg"> 
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color='white'>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color='white'>
            To start helping! ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleFormSubmit}>
            <HStack>
              <Box>
                <FormControl id="userName" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text"
                    name='username'
                    value={userState.username}
                    onChange={handleChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"
                name='email'
                value={userState.email}
                onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={userState.password}
                  onChange={handleChange} />
                <InputRightElement h={'full'}>
                  {/* <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button> */}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                type='submit'
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} as={ReactRouterLink} to='/'>Login</Link>
              </Text>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}