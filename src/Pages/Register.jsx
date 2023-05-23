import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import "../Styles/register.css";
import React from "react";
const Register = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box>
        <VStack as="header" spacing={8} mt={8}>
          <Image src="../img/Logo.png" />
          <VStack>
            <Heading className="head" as="h1" fontWeight={700} fontSize={34}>
              Get started with easily register
            </Heading>
            <Text fontSize="2xl" color={"blackAlpha.500"}>
              Free register and you can enjoy it
            </Text>
          </VStack>
          <Box w={500}>
            <VStack mt={10}>
              <FormControl>
                <FormLabel size="sm">Full Name</FormLabel>
                <Input type="text" variant="outline" size="lg"></Input>
              </FormControl>
            </VStack>
            <VStack mt={5}>
              <FormControl>
                <FormLabel size="sm">Email Addres</FormLabel>
                <Input type="email" variant="outline" size="lg"></Input>
              </FormControl>
            </VStack>
            <VStack mt={5}>
              <FormControl>
                <FormLabel size="sm">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    size="lg"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" mt={2} onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
            <Button
              rounded={50}
              colorScheme="blue"
              mt={5}
              w={"full"}
              size={"lg"}
            >
              Sign up
            </Button>
            <VStack>
              <Text mt={5}>
                Alrady Have Account ?
                <Button variant="link" colorScheme="blue">
                  Login
                </Button>
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Register;
