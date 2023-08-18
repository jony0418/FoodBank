import React, { useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

function Datepicker() {
  // Use useState within the functional component
  const [date, setDate] = useState(new Date());

  return (
    <FormControl isRequired>
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
  );
}

export default Datepicker;
