// components/layout/Navbar.js
import React from 'react';
import { Box, Flex, Link, Spacer, useColorModeValue } from '@chakra-ui/react';

function Navbar() {
    const bg = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.700", "gray.200");

    return (
        <Flex 
            as="nav" 
            bg={bg} 
            color={color} 
            p={4} 
            align="center" 
            boxShadow="md"
        >
            <Box>
                <Link href="/" fontSize="xl" fontWeight="bold">FoodBank</Link>
            </Box>
            <Spacer />
            <Box>
                <Link href="/" mx={2}>Home</Link>
                <Link href="/about" mx={2}>About</Link>
                <Link href="/dashboard" mx={2}>Dashboard</Link>
                {/* ... other navigation links */}
            </Box>
        </Flex>
    );
}

export default Navbar;
