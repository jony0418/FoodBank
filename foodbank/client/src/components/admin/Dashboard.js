import React from 'react';
import { Box, Flex, Stat, StatLabel, StatNumber, StatHelpText, Stack } from '@chakra-ui/react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import Login from '../auth/Login';
import { useEffect } from 'react';

function Dashboard() {
    const navigate = useNavigate();
    console.log(Auth.loggedIn());  

    useEffect(() => {
        if (!Auth.loggedIn()) {
            console.log('error');
            navigate('/')
            // navigate('/register'); 
        }
    });  

    return (
        <Flex direction="column" minHeight="100vh">
            <Header />
            
            <Flex as="main" flex="1" p={4}>
                <Sidebar />
                <Box flex="1" ml={4} p={5} bg="gray.100" borderRadius="md">
                    <Stack spacing={5}>
                        <Flex justify="space-between">
                            <Stat>
                                <StatLabel>Total Donations</StatLabel>
                                <StatNumber>$1,234</StatNumber>
                                <StatHelpText>Since last month</StatHelpText>
                            </Stat>

                            <Stat>
                                <StatLabel>Inventory Items</StatLabel>
                                <StatNumber>567</StatNumber>
                                <StatHelpText>10 new items</StatHelpText>
                            </Stat>

                            <Stat>
                                <StatLabel>Families Served</StatLabel>
                                <StatNumber>89</StatNumber>
                                <StatHelpText>Since last week</StatHelpText>
                            </Stat>
                        </Flex>

                        {/* components like charts, recent activities, notifications. */}
                    </Stack>
                </Box>
            </Flex>
            
            <Footer />
        </Flex>
    );
}

export default Dashboard;
