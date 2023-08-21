import React, { Component } from "react";
import { Box, Divider, AbsoluteCenter } from "@chakra-ui/react";

export default class Buttons extends Component {
  render() {
    return (
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          Content
        </AbsoluteCenter>
      </Box>
    );
  }
}
