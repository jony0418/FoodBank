import React from 'react';
import { Box, Flex, Text, Spacer, useColorModeValue } from '@chakra-ui/react';
import { Link, Link as ReactRouterLink } from 'react-router-dom'; 

function Footer() {
    const bg = useColorModeValue("primary", "gray.800");
    const color = useColorModeValue("white", "gray.200");

    return (
        <Flex 
            as="footer" 
            bg={bg} 
            color={color} 
            p={4} 
            align="center" 
            justify="space-between"
            wrap="wrap"
        >
            <Text>&copy; 2023 Bamx</Text>
            


            <Spacer />

            <Box>
                <ReactRouterLink to="/privacy" mx={2}>Privacy Policy</ReactRouterLink>
                <ReactRouterLink to="/terms" mx={2}>Terms of Service</ReactRouterLink>
            </Box>
        </Flex>
    );
}

export default Footer;
