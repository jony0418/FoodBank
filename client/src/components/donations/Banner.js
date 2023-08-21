import React, { Component } from "react";
import { Wrap, WrapItem, Center, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/girl-apples.png";

export default class Banner extends Component {
  render() {
    return (
      <Wrap justify="center">
        <WrapItem style={{ position: "relative" }}>
          <Center>
            <Image
              height={500}
              ratio={4}
              objectFit="cover"
              src={logo}
              alt="Girl with Apples"
            />
          </Center>
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              opacity: "25%",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              color: "white",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Text pr="10" align="center" fontSize="45px" fontWeight="bold">
              You can make the difference
            </Text>
          </div>
        </WrapItem>
      </Wrap>
    );
  }
}
