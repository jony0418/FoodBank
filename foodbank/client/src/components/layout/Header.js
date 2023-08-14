// components/layout/Header.js
import React from 'react';
import { Box, Flex, Link, Spacer, Text, useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex as="header" bg="primary" color="white" p={4} align="center" boxShadow="md">
            <Box borderRadius="full" bg="secondary" p={2}>
                <Text fontSize="xl" fontWeight="bold">FoodBank</Text>
            </Box>
            <Spacer />
            <Box>
                <Link mx={2} href="/" color="tertiary">Home</Link>
                <Link mx={2} href="/about" color="quaternary">About</Link>
                {/* ... other navigation links */}
            </Box>
            <IconButton 
                ml={4}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                aria-label="Toggle Color Mode"
            />
        </Flex>
    );
}

export default Header;
