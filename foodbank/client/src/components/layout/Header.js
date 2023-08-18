import React from 'react';
import { Box, Flex, Link, Spacer, Text, useColorMode, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth'; 


function Header() {
    const { toggleColorMode } = useColorMode();
    const navigate = useNavigate(); 

    const handleLogout = () => {
        Auth.logout();
        navigate('/');  
    }


    return (
        <Flex as="header" bg="primary" color="white" p={4} align="center" boxShadow="md">
            <Box borderRadius="full" bg="secondary" p={2}>
                <Text fontSize="xl" fontWeight="bold">FoodBank</Text>
            </Box>
            <Spacer />
            <Box>
                <Link mx={2} href="/" color="quaternary">Home</Link>
                {/* ... other navigation links */}
                {Auth.loggedIn() && (
                    <Link mx={2} onClick={handleLogout} color="quaternary">Log Out</Link>
                )}
            </Box>
            <IconButton 
                ml={4}
                onClick={toggleColorMode}
                aria-label="Toggle Color Mode"
            />
        </Flex>
    );
}

export default Header;
