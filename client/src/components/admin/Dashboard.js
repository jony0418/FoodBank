import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { MdCheckCircle } from "react-icons/md";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

const DASHBOARD_DATA = gql`
  query GetDashboardData {
    products {
      name
      quantity
    }
    categories {
      name
      products {
        name
        quantity
      }
    }
  }
`;

function Dashboard() {
  const { loading, error, data } = useQuery(DASHBOARD_DATA);
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    if (!Auth.loggedIn()) {
      console.log("error");
      navigate("/");
    }
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const totalProducts = data.products.length;
  const totalCategories = data.categories.length;
  const totalQuantity = data.products.reduce((sum, product) => sum + product.quantity, 0);

  const fcontstyle = {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "30px",
    textAlign: "center"
  };

  const right = {
    padding: "25px",
    flex: "80%"
  }

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex as="main" style={fcontstyle} flex="1" p={4}>
        <Sidebar />
        <Box style={right} bg={bg} borderRadius="md" flex="1">
          <Stack spacing={5}>
            <Flex justify="space-between">
              <Stat>
                <StatLabel>Total Products</StatLabel>
                <StatNumber>{totalProducts}</StatNumber>
                <StatHelpText>Available in inventory</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Total Categories</StatLabel>
                <StatNumber>{totalCategories}</StatNumber>
                <StatHelpText>Product categories</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Total Quantity</StatLabel>
                <StatNumber>{totalQuantity}</StatNumber>
                <StatHelpText>Total kg in stock</StatHelpText>
              </Stat>
            </Flex>
            {/* You can add a chart here if needed */}
            <List spacing={3}>
              {data.products.map((product) => (
                <ListItem key={product.name}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {product.name} - Quantity: {product.quantity}
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Dashboard;

