import { Box, Image, Text } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box bgColor={"black"} p={"10px"} display={"flex"} alignItems={"center"} gap={"10px"} justifyContent={"center"}>
        <Image src="https://exactspace.co/wp-content/uploads/2020/04/exactspace-white.png" width={"150px"}/>
        <Text textColor={"white"} fontSize={"30px"}>Chat App</Text>
    </Box>
  )
}

export default Navbar