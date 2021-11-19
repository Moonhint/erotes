import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

import './Greeting.css';

const canon = require("../../audios/canon.mp3");

function Greeting() {
  const [ greetingClass, setGreetingClass ] = useState('greeting');

  const handleOpenInvitation = () => {
    let song = new Audio(canon.default);
    song.currentTime = 3;
    song.play();
    setGreetingClass('greeting-close');
  }

  return (
    <div className={greetingClass}>
      <div className="greeting-container">
        <div className="text-inner">
          <p>Dear [Guess Name],</p>
          <h2>You Are Invited!</h2>
          <p>Wedding Celebration of</p>
          <h1>Antoni & Sinthia</h1>
        </div>
        <div className="btn-open" onClick={handleOpenInvitation}>
          <IoIosArrowForward size="18px"/>
          <span className="text-open">Open Invitation</span>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
