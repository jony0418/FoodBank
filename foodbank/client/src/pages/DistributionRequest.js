import Header from "../components/layout/Header";
import FormDistribution from "../components/distribution/FormDistribition";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import { Grid, Flex, Square, Box, Text } from "@chakra-ui/react";

function Matchup() {
  return (
    <>
      <Header />
      <Flex height={"85vh"}>
        <Box>
          <Sidebar />
        </Box>
        <Box flex="1" padding={4}>
          <FormDistribution />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Matchup;
