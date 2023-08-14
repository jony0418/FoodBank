import React from 'react';
import { Box, Flex, Text, Link, Spacer, useColorModeValue } from '@chakra-ui/react';

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
                <Link href="#" mx={2}>Privacy Policy</Link>
                <Link href="#" mx={2}>Terms of Service</Link>
            </Box>
        </Flex>
    );
}

export default Footer;
