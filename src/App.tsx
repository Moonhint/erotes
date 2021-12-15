import { useEffect, useState } from 'react';
import './App.css';
import Greeting from './Pages/Greeting';
import Content from './Pages/Content';
import { getUserById } from './api';

const canon = require("./audios/canon.mp3");
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get('d');

function App() {
  const [ currUser, setCurrUser ] = useState({ hola: 'hola' });
  const song = new Audio(canon.default);
  song.currentTime = 3;

  useEffect(()=>{
    const getUserInfo = async () => {
      if(userId){
        const { data } = await getUserById(userId);
        setCurrUser(data);
      }
    }
    getUserInfo();
  }, []);

  return (
    <div className="App">
      <Content song={song} currUser={currUser}/>
      <Greeting song={song}/>
    </div>
  );
}

export default App;
