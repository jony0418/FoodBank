// components/layout/Sidebar.js
import React from 'react';
import { VStack, Link, Icon, useColorModeValue } from '@chakra-ui/react';
import { MdDashboard, MdInventory, MdDistribution } from 'react-icons/fa';  // Example icons

function Sidebar() {
    const bg = useColorModeValue("white", "gray.800");
    const hoverBg = useColorModeValue("gray.200", "gray.600");
    const color = useColorModeValue("gray.700", "gray.200");

    return (
        <VStack 
            as="aside" 
            bg={bg} 
            p={4} 
            spacing={4} 
            align="start" 
            width="250px" 
            boxShadow="md"
        >
            <Link 
                href="/dashboard" 
                color={color}
                _hover={{ background: hoverBg, borderRadius: 'md' }}
                p={2}
                w="100%"
                display="flex"
                alignItems="center"
            >
                <Icon as={MdDashboard} mr={2} />
                Dashboard
            </Link>
            <Link 
                href="/inventory" 
                color={color}
                _hover={{ background: hoverBg, borderRadius: 'md' }}
                p={2}
                w="100%"
                display="flex"
                alignItems="center"
            >
                <Icon as={MdInventory} mr={2} />
                Inventory Management
            </Link>
            <Link 
                href="/distribution" 
                color={color}
                _hover={{ background: hoverBg, borderRadius: 'md' }}
                p={2}
                w="100%"
                display="flex"
                alignItems="center"
            >
                <Icon as={MdDistribution} mr={2} />
                Distribution Management
            </Link>
            {/* ... other sidebar links */}
        </VStack>
    );
}

export default Sidebar;
