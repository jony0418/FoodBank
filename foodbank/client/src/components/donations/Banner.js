import React, { Component } from "react";
import { Image } from "@chakra-ui/react";

export default class Header extends Component {
  render() {
    return (
      <Flex align="center">
        <Box flex="1">
          <Text fontSize="xl" fontWeight="bold">
            You can make the difference
          </Text>
        </Box>
        <Box ml={4} maxW="300px">
          <Image src="./girl-apples.png" alt="Girl with Apples" />
        </Box>
      </Flex>
    );
  }
}
