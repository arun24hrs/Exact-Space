import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'

const Message = ({el, allMsg}) => {
  return (
    <Box
              key={el[1]}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Avatar name={el[0]}></Avatar>
              <Text fontSize={"20px"}>{allMsg.length ? el[1] : "No new Message"}</Text>
              <Text color={"gray.500"} ml={4}>
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </Box>
  )
}

export default Message