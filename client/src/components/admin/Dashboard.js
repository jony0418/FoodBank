import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import {
  Box,
  Flex,
  Stat,
  Text,
  StatLabel,
  StatNumber,
  StatHelpText,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { MdCallMade, MdCallReceived } from "react-icons/md";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import { getDataDistribution } from "../utils/api";

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
  const { loading: Ploading, error: Perror, data: Pdata } = useQuery(DASHBOARD_DATA);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productIndex, setProductIndex] = useState(null);
  const [Clicked, setClicked] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false }); // Determine if mobile or not

  const handleClick = (index) => {
    if (index != productIndex) {
      setClicked(true);
      setProductIndex(index);
    } else {
      setClicked(false);
      setProductIndex(null);
    }
  };

  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");

  const fetchData = async () => {
    try {
      const inventoryData = await getDataDistribution();
      setData(inventoryData);
      console.log(inventoryData);
      setLoading(false);
    } catch (error) {
      //console.error('Error:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!Auth.loggedIn()) {
      console.log("error");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    fetchData();
  }, []);

  if (Ploading) return <p>Loading...</p>;
  if (Perror) return <p>Error: {Perror.message}</p>;

  const totalProducts = Pdata.products.length;
  const totalCategories = Pdata.categories.length;
  const totalQuantity = Pdata.products.reduce((sum, product) => sum + product.quantity, 0);




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

  const table_text = {
    fontSize: "20px",
  }
  const table_product_text = {
    fontSize: "14px",
  }
  const ReceiveIcon = {
    color: 'green'
  };
  const DistributeIcon = {
    color: 'red'
  };
  const cursor = {
    cursor: "pointer"
  };
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex as="main" className='main' flex="1" p={1}>
        <Sidebar />
        <Box style={right} bg={bg} borderRadius="md" flex="1">
          <Stack spacing={2}>
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
            <Box overflowX="auto">

              {data ? (<Table variant="simple" m={0} p={0}>
                <Thead>
                  <Tr>
                    <Th>Op.</Th>
                    {!isMobile &&
                      <React.Fragment>
                        <Th>Operation</Th>
                      </React.Fragment>
                    }
                    <Th>Products No.</Th>
                    <Th>Units</Th>
                    <Th>Total</Th>
                    {!isMobile &&
                      <React.Fragment>
                        <Th>Purpose</Th>
                        <Th>BatchSize</Th>
                        <Th>Date</Th>
                      </React.Fragment>
                    }
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((transaction, index) => (
                    <React.Fragment key={index}>
                      <Tr key={index} onClick={() => handleClick(index)} style={cursor}>

                        <Td style={table_text}>
                          {transaction.operation === "Receive" ? <MdCallReceived style={ReceiveIcon} /> : <MdCallMade style={DistributeIcon} />}
                        </Td>
                        {!isMobile &&
                          <React.Fragment>
                            <Td style={table_text}>
                              {transaction.operation}
                            </Td>
                          </React.Fragment>
                        }
                        <Td style={table_text}>
                          {transaction.product.length}
                        </Td>
                        <Td style={table_text}>
                          {transaction.unit}
                        </Td>
                        <Td style={table_text}>
                          {transaction.product.map(product => product.quantity * (transaction.unit)).reduce((sum, quantity) => sum + quantity, 0)}
                        </Td>
                        {!isMobile &&
                          <React.Fragment>
                            <Td style={table_text}>
                              {transaction.purpose}
                            </Td>
                            <Td style={table_text}>
                              {transaction.batchSize}
                            </Td>
                            <Td style={table_text}>
                              {new Date(transaction.createdAt).toLocaleDateString()}
                            </Td>
                          </React.Fragment>
                        }

                      </Tr>
                      {Clicked && productIndex == index && <OpenProductList data={transaction.product} unit={transaction.unit} />
                      }
                    </React.Fragment>
                  ))}
                </Tbody>
              </Table>) : (false)}
              {loading && <Text mb={4}>Loading...</Text>}
              {error && <Text mb={4}>Error: {error.message}</Text>}
            </Box>
          </Stack>
        </Box >
      </Flex >
      <Footer />
    </Flex >
  );
}

function OpenProductList(props) {
  console.log(props.data);
  const isMobile = useBreakpointValue({ base: true, md: false }); // Determine if mobile or not

  const table_product_text = {
    fontSize: "14px",
    lineHeight: "1",
    whiteSpace: "nowrap",
    padding: "6px 10px",
  }
  const table_product_text_title = {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "1",
    padding: "6px 10px",
  }

  return (
    <React.Fragment>
      <Tr>
        {!isMobile &&
          <React.Fragment>
            <Td ></Td>
          </React.Fragment>}
        <Td style={table_product_text_title}>
          Name
        </Td>
        <Td style={table_product_text_title}>
          Quantity
        </Td>
        <Td style={table_product_text_title}>
          Units
        </Td>
        <Td style={table_product_text_title}>
          Total
        </Td>
      </Tr>
      {props.data.map((product, index) => (
        <Tr key={index}>
          {!isMobile &&
            <React.Fragment>
              <Td ></Td>
            </React.Fragment>}
          <Td style={table_product_text}>
            {product.name}
          </Td>
          <Td style={table_product_text}>
            {product.quantity}
          </Td>
          <Td style={table_product_text}>
            {props.unit}
          </Td>
          <Td style={table_product_text}>
            {product.quantity * props.unit}
          </Td>
        </Tr>
      ))}
    </React.Fragment>
  );
}
export default Dashboard;

