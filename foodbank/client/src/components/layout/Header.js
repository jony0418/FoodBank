import React from 'react';
import { Box, Flex, Link, Spacer, Text, useColorMode, IconButton, HStack } from '@chakra-ui/react';
import { useNavigate, Link as ReactRouterLink, useLocation } from 'react-router-dom';

import Auth from '../utils/auth';
function Header() {
  const { toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  const linkStyles = {
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none',
    },
  };

  return (
    <Flex as="header" bg="primary" color="white" p={4} align="center" boxShadow="md">
      <ReactRouterLink to="/dashboard" style={linkStyles}>
        <Box borderRadius="full" bg="secondary" p={2}>
          <Text fontSize="xl" fontWeight="bold">FoodBank</Text>
        </Box>
      </ReactRouterLink>
      <Spacer />
      <HStack spacing="30px">
        {location.pathname !== '/dashboard' && (
          <ReactRouterLink mx={2} to="/dashboard" color="quaternary">Home</ReactRouterLink>
        )}
        {Auth.loggedIn() && (
          <>
            <Link mx={2} onClick={handleLogout} color="quaternary">Log Out</Link>
          </>
        )}
      </HStack>
      <IconButton
        ml={4}
        onClick={toggleColorMode}
        aria-label="Toggle Color Mode"
      />
    </Flex>
  );
}
export default Header;