import { useEffect, useState } from 'react';
import './App.css';
import Greeting from './Pages/Greeting';
import Content from './Pages/Content';
import { getUserById } from './api';

const canon = require("./audios/canon.mp3");
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get('d');

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const width80 = (width * 100) / 100;

function App() {
  const [ currUser, setCurrUser ] = useState<any>({ hola: 'hola' });
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
      <Content song={song} currUser={currUser} setCurrUser={setCurrUser} width80={width80}/>
      <Greeting song={song} currUser={currUser}/>
    </div>
  );
}

export default App;
