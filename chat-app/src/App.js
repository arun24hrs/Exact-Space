import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import InputBox from './components/InputBox';
import Navbar from './components/Navbar';
import MsgBox from './components/MsgBox';


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
function App() {
  const [msg, setMsg] = React.useState("");
  const [allMsg, setAllMsg] = React.useState([]);

  const handleChange = (e) => {
    console.log(e)
    setMsg(e.target.value);
  };

  const handleSend = () => {
    if(msg !== ""){
      const user = Math.floor(Math.random() * user_list.length);
    const newMsg = [user_list[user], msg];
    setAllMsg([...allMsg, newMsg]);
    setMsg("");
    }
    
  };
  
  return (
    <Box bgColor={"gray.900"}>
      <Navbar/>
      <MsgBox allMsg={allMsg}/>
      <InputBox handleChange={handleChange} handleSend={handleSend} msg={msg} setMsg={setMsg}/>
    </Box>
  );
}

export default App;
