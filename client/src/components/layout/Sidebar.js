import React, { useState } from 'react';
import {FaBars} from "react-icons/fa";
import { VStack, Link, useColorModeValue, Icon, Text, Flex, Container } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { MdDashboard, MdInventory, MdLocalShipping, MdOutlineModeEdit, MdOutlineInput, MdOutlineOutput } from 'react-icons/md';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const bg = useColorModeValue("white", "gray.800");
    const hoverBg = useColorModeValue("gray.200", "gray.600");
    const color = useColorModeValue("gray.700", "gray.200");

    const menuItem = [
        {
            path: '/dashboard',
            name: "Dashboard",
            icon: <MdDashboard />
        },
        {
            path: "/inventory",
            name: "Inventory Management",
            icon: <MdInventory />
        },
        {
            path: "/distribution",
            name: "Distribution Management",
            icon: <MdLocalShipping />
        },
        {
            path: "/modifyitem",
            name: "Modify Item",
            icon: <MdOutlineModeEdit />
        },
        {
            path: "/inputs",
            name: "Inputs",
            icon: <MdOutlineInput />
        },
        {
            path: "/output",
            name: "Output",
            icon: <MdOutlineOutput />
        }
    ]
    return (
        <VStack
            as="aside"
            // flex="0 0 auto"
            // style={{flexGrow: 1, flexShrink: 1, flexBasis: 50}}
            bg={bg}
            p={4}
            spacing={4}
            boxShadow="md"
        >
            <div style={{ width: isOpen ? "300px" : "75px", flexGrow: 1, flexShrink: 1, flexBasis: 50 }} className="sidebar">
                <Flex className="top_section" alignItems>
                    <Text style={{ display: isOpen ? "block" : "none" }} fontSize='4xl'>Menu</Text>
                    <Icon style={{ marginLeft: isOpen ? "200px" : "50px" }} className="bars" boxSize={8}>
                        <FaBars onClick={toggle} />
                    </Icon>
                </Flex>
                {
                    menuItem.map((item, index) => (
                        <Link
                            color={color}
                            _hover={{ background: hoverBg, borderRadius: 'md' }}
                            p={2}
                            mt={7}
                            w="100%"
                            display="flex"
                            alignItems="center"
                            as={ReactRouterLink} to={item.path} key={index} classname="link" activeclassName="active"
                        >
                            <Icon boxSize={8}>{item.icon}</Icon>
                            <Container style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</Container>
                        </Link>
                    ))
                }
            </div>
            <main>{children}</main>
        </VStack>
    );
};

export default Sidebar;
