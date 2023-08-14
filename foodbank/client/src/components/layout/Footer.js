// components/layout/Footer.js
import React from 'react';
import { Box, Flex, Text, Link, Spacer, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from '@chakra-ui/icons';  // Example social media icons

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
            
            <Flex align="center">
                <Text mr={4}>Follow us:</Text>
                <Link href="#" aria-label="Facebook" mx={1}>
                    <FaFacebook />
                </Link>
                <Link href="#" aria-label="Twitter" mx={1}>
                    <FaTwitter />
                </Link>
                <Link href="#" aria-label="Instagram" mx={1}>
                    <FaInstagram />
                </Link>
            </Flex>

            <Spacer />

            <Box>
                <Link href="#" mx={2}>Privacy Policy</Link>
                <Link href="#" mx={2}>Terms of Service</Link>
            </Box>
        </Flex>
    );
}

export default Footer;
