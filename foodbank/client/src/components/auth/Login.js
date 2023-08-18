'use client'

import { Button, Checkbox, Flex, Text, FormControl, FormLabel, Heading, Input, Stack, Image, Box, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink} from 'react-router-dom';
import { useState} from 'react';
import { useMutation } from '@apollo/client';
import { UserLogin } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = (props) => {
    const [userState, setuserState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(UserLogin);

    //const navigate = useNavigate();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
        case "email":
          setuserState({ ...userState, [name]: value });
          break;
        case "password":
          setuserState({ ...userState, [name]: value });
          break;
        default:
          break;
      }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const mutationResponse = await login({
            variables: { email: userState.email, password: userState.password },
          });
          const token = mutationResponse.data.login.token;
            Auth.login(token);
            //navigate('/dashboard');
        } catch (e) {
          console.log(e);
        }
      };

    
    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
    //   console.log(userState);
    //   try {
    //     const { data } = await login({
    //       variables: { ...userState },
    //     });
  
    //     Auth.login(data.login.token);
    //     navigate('/dashboard');
    //     //window.location.href = '/dashboard';
    //   } catch (e) {
    //     console.error(e);
    //   }
  
    //   setuserState({
    //     email: '',
    //     password: '',
    //   });
    // };


//export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
        <Image src='../../images/logo.png' alt="logo" />
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          {data ? (    
            <p>
            Success! You may now head{' '}
                <Link to='/dashboard'>Login</Link>
            </p>
            ) : (
          <form onSubmit={handleFormSubmit}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" 
                    name="email"
                    value={userState.email}
                    onChange={handleChange}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" 
                    name="password"
                    value={userState.password}
                    onChange={handleChange} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} type="submit">
              Sign in
            </Button>
          </Stack>
          </form>
             )};
          <Box>
            New to us?{" "}
            <Link color="blue.500" href="#" as={ReactRouterLink} to='/register'>
              Sign Up
            </Link>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          src={
            '../../images/food.jpg'
          }
          alt={'Login Image'}
          objectFit={'cover'}
        />
      </Flex>
    </Stack>
  )
//}
};

export default Login;