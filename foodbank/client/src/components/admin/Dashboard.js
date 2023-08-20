import React, { useEffect } from 'react';
import { Box, Flex, Stat, StatLabel, StatNumber, StatHelpText, Stack, List, ListItem, ListIcon } from '@chakra-ui/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { MdCheckCircle } from 'react-icons/md';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

const data = [
  { name: 'Jan', donations: 400 },
  { name: 'Feb', donations: 300 },
  // ... other months
];

function DonationsChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="donations" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

function RecentActivities() {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        New donation received from 
      </ListItem>
      {/* ... other activities */}
    </List>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/');
    }
  }, [navigate]);

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

            <DonationsChart />
            <RecentActivities />
          </Stack>
        </Box>
      </Flex>
      
      <Footer />
    </Flex>
  );
}

export default Dashboard;
