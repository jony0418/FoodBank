import React, { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Tr,
  Th,
  Td,
  Table,
  TableContainer,
  Thead,
  Tbody,
} from "@chakra-ui/react";

function DistributionReport() {
  // Use useState within the functional component
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <FormControl isRequired marginBottom="3vh">
        <Heading as="h1" size="l" padding={2}>
          Distribution Report
        </Heading>
        <FormLabel padding={1}>Choose a date:</FormLabel>
        <SingleDatepicker
          padding={1}
          name="date-input"
          date={date}
          onDateChange={setDate}
        />
        <FormLabel padding={1}>Employee:</FormLabel>
        <Input type="employee-id" />
      </FormControl>
      <TableContainer padding={2} paddingRight={20}>
        <Heading as="h1" size="l" paddingBottom={6}>
          Distribution History Report
        </Heading>
        <Table size="sm" borderTop="40vh">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Product</Th>
              <Th>Date of departure</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Produce</Td>
              <Td>Apples</Td>
              <Td isDate>07/12/2023</Td>
            </Tr>
            <Tr>
              <Td>Nonperishable Foods</Td>
              <Td>Canned corn</Td>
              <Td isDate>07/12/2023</Td>
            </Tr>
            <Tr>
              <Td>Nonperishable</Td>
              <Td>Oil</Td>
              <Td isDate>07/13/2023</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DistributionReport;
