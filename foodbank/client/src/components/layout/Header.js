import React from 'react';
import { Box, Flex, Link, Spacer, Text, useColorMode, IconButton, HStack, Image } from '@chakra-ui/react';
import { useNavigate, Link as ReactRouterLink } from 'react-router-dom';

import Auth from '../utils/auth';
function Header() {
  const { toggleColorMode } = useColorMode();
  const navigate = useNavigate();
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
        <Image htmlHeight="200px" htmlWidth="200px" src='../../images/nbglogo.png' alt="logo" />
      </ReactRouterLink>
      <Spacer />
      <HStack spacing="30px">
        <ReactRouterLink mx={2} to="/" color="quaternary">Home</ReactRouterLink>
        {/* ... other navigation links */}
        {Auth.loggedIn() && (
          <>
            <ReactRouterLink mx={2} onClick={handleLogout} color="quaternary">Log Out</ReactRouterLink>
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