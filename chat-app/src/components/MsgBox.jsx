import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Message from "./Message";


const MsgBox = ({allMsg}) => {
  

  return (
    <>
    <Box bgColor={"gray.500"} w={"100vw"} p={"10px"}>
            <Heading fontSize={"2xl"}>Group Conversation</Heading>
        </Box>
    <VStack
      border={"1px solid white"}
      p={"40px"}
      m="auto"
      display={"flex"}
      alignItems={"start"}
      h={"60vh"}
      color={"white"}
      overflowY={"scroll"}
    >
        
      {/* Message */}
      {allMsg.length &&
        allMsg.map((el) => {
          return (
            <Message el={el} allMsg={allMsg}/>
          );
        })}
      
    </VStack></>
  );
};

export default MsgBox;
