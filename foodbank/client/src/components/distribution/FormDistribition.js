import React, { Component } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default class Banner extends Component {
  render() {
    return (
      <FormControl isRequired>
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
      </FormControl>
    );
  }
}
