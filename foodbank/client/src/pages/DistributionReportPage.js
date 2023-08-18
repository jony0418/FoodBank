import Header from "../components/layout/Header";
// import DistributionReport from "../components/distribution/DistributionReport";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import { Flex, Box } from "@chakra-ui/react";
import DistributionReport from "../hooks/DistributionReportH";

function ReportDistPage() {
  return (
    <>
      <Header />
      <Flex height={"85vh"}>
        <Box>
          <Sidebar />
        </Box>
        <Box flex="1" padding={4}>
          <DistributionReport />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default ReportDistPage;
