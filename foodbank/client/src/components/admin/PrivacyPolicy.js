import React, { useEffect } from "react";
import { Box, Heading, Text, Flex } from '@chakra-ui/react'; 
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import Auth from '../utils/auth'; 

function PrivacyPolicy() {
    const navigate = useNavigate(); 

    useEffect(() => {
        // Only navigate if the user is not logged in
        if (!Auth.loggedIn()) {
            navigate('/');
        }
    }, []); 

    return (
        <Flex direction='column' minHeight='100vh'>
            <Header />

            <Flex as="main" flex="1" p={4}>
                <Box p={4}>
                    <Heading as="h1" mb={4}>Privacy Policy</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam congue libero vitae eros suscipit, at aliquet mauris blandit.
                        Fusce tincidunt, ex nec convallis accumsan, tellus libero ullamcorper libero,
                        et vulputate augue arcu sit amet leo.
                    </Text>
                </Box>
            </Flex>
            <Footer />
        </Flex>
    );
}

export default PrivacyPolicy;
