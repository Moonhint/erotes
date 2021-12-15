import './App.css';
import Greeting from './Pages/Greeting';
import Content from './Pages/Content';

const canon = require("./audios/canon.mp3");

function App() {
  const song = new Audio(canon.default);
  song.currentTime = 3;

  return (
    <div className="App">
      <Content song={song}/>
      <Greeting song={song}/>
    </div>
  );
}

export default App;
