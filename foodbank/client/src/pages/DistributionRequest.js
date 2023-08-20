import Header from "../components/layout/Header";
import FormDistribution from "../hooks/FormDistribition";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";

import { Flex, Box } from "@chakra-ui/react";

function DistributionRequest() {
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

export default DistributionRequest;
