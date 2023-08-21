import React from 'react';
import { Flex, Link, Spacer, useColorMode, IconButton, HStack, Image, useColorModeValue } from '@chakra-ui/react';
import { useNavigate, Link as ReactRouterLink, useLocation } from 'react-router-dom';

import Auth from '../utils/auth';

function Header() {
    const { toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const location = useLocation();

    const bg = useColorModeValue("primary", "gray.800");
    const color = useColorModeValue("black", "white");
    const linkColor = useColorModeValue("black", "gray.200");

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
        <Flex as="header" bg={bg} color={color} p={4} align="center" boxShadow="md">
            <ReactRouterLink to="/dashboard" style={linkStyles}>   
                <Image htmlHeight="200px" htmlWidth="200px" src='../../images/nbglogo.png' alt="logo" />
            </ReactRouterLink>
            <Spacer />
            <HStack spacing="30px">
                {location.pathname !== '/dashboard' && (
                    <ReactRouterLink mx={2} to="/dashboard" style={{ color: linkColor }}>Home</ReactRouterLink>
                )}
                {Auth.loggedIn() && (
                    <>
                        <Link mx={2} onClick={handleLogout} style={{ color: linkColor }}>Log Out</Link>
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
