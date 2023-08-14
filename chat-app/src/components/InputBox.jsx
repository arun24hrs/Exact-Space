import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { LuSend } from "react-icons/lu";
// import EmojiPicker from './EmojiPicker';
// import InputEmoji from "react-input-emoji";

const InputBox = ({ handleChange, handleSend, msg, setMsg }) => {
  return (
    <Box w={"80vw"} m="auto" display={"flex"} alignItems={"center"} py={"20px"}>
      <Input
          variant={"filled"}
          bgColor={"black"}
          color={"white"}
          placeholder="Enter your message"
          _hover={{ bgColor: "gray.700" }}
          onChange={(e) => handleChange(e)}
          value={msg}
        />
      {/* <InputEmoji
        value={msg}
        onChange={setMsg}
        cleanOnEnter
        //   onEnter={handleOnEnter}
        placeholder="Type a message"
      /> */}

      <Box
        position="relative"
        onClick={handleSend}
        left={"-10"}
        _hover={{ cursor: "pointer" }}
      >
        <LuSend color="white" size={"25px"} />
      </Box>
    </Box>
  );
};

export default InputBox;
