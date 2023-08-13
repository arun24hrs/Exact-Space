import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import InputBox from './components/InputBox';
import Navbar from './components/Navbar';
import MsgBox from './components/MsgBox';



function App() {
  
  return (
    <Box bgColor={"gray.900"}>
      <Navbar/>
      <MsgBox/>
      {/* <InputBox setMsg={setMsg} msg={msg}/> */}
    </Box>
  );
}

export default App;
