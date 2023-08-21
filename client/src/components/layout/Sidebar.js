import React from 'react';
import { VStack, Link, useColorModeValue, Icon, Tooltip } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { MdDashboard, MdInventory, MdLocalShipping } from 'react-icons/md';

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
            align="center" // Align icons to the center
            width="60px" // Reduced width to fit the icons
            boxShadow="md"
        >
            <Tooltip label="Dashboard" placement="right">
                <Link 
                    color={color}
                    _hover={{ background: hoverBg, borderRadius: 'md' }}
                    p={2}
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center" // Center the icon
                    as={ReactRouterLink} to='/dashboard'
                >
                    <Icon as={MdDashboard} />
                </Link>
            </Tooltip>
            <Tooltip label="Inventory Management" placement="right">
                <Link 
                    color={color}
                    _hover={{ background: hoverBg, borderRadius: 'md' }}
                    p={2}
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    as={ReactRouterLink} to='/inventory'
                >
                    <Icon as={MdInventory} />
                </Link>
            </Tooltip>
            <Tooltip label="Distribution Management" placement="right">
                <Link 
                    color={color}
                    _hover={{ background: hoverBg, borderRadius: 'md' }}
                    p={2}
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    as={ReactRouterLink} to='/distribution'
                >
                    <Icon as={MdLocalShipping} />
                </Link>
            </Tooltip>
            {/* ... other sidebar links */}
        </VStack>
    );
}

export default Sidebar;
