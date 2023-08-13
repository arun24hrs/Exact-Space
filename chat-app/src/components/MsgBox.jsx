import { Avatar, Box, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Message from './Message'
import {LuSend} from "react-icons/lu"


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]

const MsgBox = () => {
    const [msg, setMsg] = React.useState("");
    const [allMsg, setAllMsg] = React.useState([]);

    const handleChange = (e) => {
        setMsg(e.target.value)
    }

    const handleSend = () => {
        const user = Math.floor(Math.random() * user_list.length);
        const newMsg = [user_list[user],msg]
        setAllMsg([...allMsg, newMsg])
        setMsg("")
    }

    console.log(allMsg)

  return (
    <Box border={"1px solid white"} p={"40px"} m="auto" display={'flex'} alignItems={"end"} h={"70vh"} color={"white"}>

        {/* <Message/> */}
        {allMsg.length && allMsg.map((el)=> {
            console.log(el, "el")
            return (
                <Box key={el[1]} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={"5px"}>
            <Avatar name={el[0]}></Avatar>
            <Text>{allMsg.length? el[1] : "No new Message"}</Text>
            <Text>{new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</Text>
        </Box>
            )
        })}


        {/* INPut */}
        <Box w={"80vw"} m="auto" display={'flex'} alignItems={"center"} py={"28px"}>
        <Input variant={"filled"} bgColor={"black"} color={"white"} placeholder='Enter your message' _hover={{bgColor:"gray.700"}} onChange={(e)=> handleChange(e)} value={msg}/>
        <Box position="relative" onClick={handleSend} left={"-10"} _hover={{cursor:"pointer"}}>
        <LuSend color='white' size={"25px"} />
        </Box>
    </Box>
    </Box>
  )
}

export default MsgBox