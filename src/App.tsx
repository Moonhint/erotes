import { useEffect, useState } from 'react';
import './App.css';
import Greeting from './Pages/Greeting';
import Content from './Pages/Content';
import Loading from './Pages/Loading';
import { getUserById } from './api';

const backsound = require("./audios/backsound.mp3");
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get('d');

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const width80 = (width * 100) / 100;

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ greetingClass, setGreetingClass ] = useState('greeting');
  const [ currUser, setCurrUser ] = useState<any>({});
  const song = new Audio(backsound.default);
  song.currentTime = 3;
  song.loop = true;

  useEffect(()=>{
    const getUserInfo = async () => {
      if(userId){
        const { data } = await getUserById(userId);
        setCurrUser(data);
      }
    }
    getUserInfo();
  }, []);

  const renderIfNotLoading:any = () => {
    if (isLoading){
      return (
        <Loading isLoading={isLoading} setIsLoading={setIsLoading}/>
      )
    }else{
      return(
        <>
          <Content showContent={greetingClass !== 'greeting'} song={song} currUser={currUser} setCurrUser={setCurrUser} width80={width80}/>
          <Greeting song={song} currUser={currUser} greetingClass={greetingClass} setGreetingClass={setGreetingClass} />
        </>
      )
    }
  }

  return (
    <div className="App">
      {renderIfNotLoading()}
    </div>
  );
}

export default App;
