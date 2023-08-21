import React from 'react';
import { Flex, Text, Spacer, useColorModeValue, HStack } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'; 

function Footer() {
    const bg = useColorModeValue("primary", "gray.800");
    const color = useColorModeValue("black", "white");
    const linkColor = useColorModeValue("quaternary", "gray.200");

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

            <HStack spacing="30px">
                <ReactRouterLink to="/privacy" mx={2} style={{ color: linkColor }}>Privacy Policy</ReactRouterLink>
                <ReactRouterLink to="/terms" mx={2} style={{ color: linkColor }}>Terms of Service</ReactRouterLink>
                <ReactRouterLink to="/aboutus" mx={2} style={{ color: linkColor }}>About Us</ReactRouterLink>
            </HStack>
        </Flex>
    );
}

export default Footer;
