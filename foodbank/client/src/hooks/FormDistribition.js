import React from "react";
import { useMutation } from "@apollo/client";
// import React, { Component } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
} from "@chakra-ui/react";
// import { useEffect } from "react";

function DistributionRequest() {
  // const [billOfMaterial, initialMaterial] = useState([]);

  // useEffect(() => {
  //   initialDataAPI()
  //     .then((data) => {
  //       initialMaterial(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data", error);
  //     });
  // }, []);

  return (
    <FormControl isRequired>
      <form>
        <Heading as="h1" size="l">
          Distribution Form
        </Heading>
        <FormLabel padding={1}>Item</FormLabel>
        <Select padding={1} placeholder="Select Item">
          <option>Can Corn</option>
          <option>Oil</option>
        </Select>
        <FormLabel padding={1}>Quantity</FormLabel>
        <NumberInput padding={1} max={50} min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel padding={1}>Food Distribution</FormLabel>
        <Select padding={1} placeholder="Select One">
          <option>Intake</option>
          <option>Output</option>
        </Select>
      </form>
    </FormControl>
  );
}

export default DistributionRequest;
