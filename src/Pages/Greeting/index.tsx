import { useState } from 'react';
import { IoMdHeart } from "react-icons/io";

import './Greeting.css';

function Greeting({ song }: { song: any}) {
  const [ greetingClass, setGreetingClass ] = useState('greeting');

  const handleOpenInvitation = () => {
    song.play();
    setGreetingClass('greeting-close');
  }

  return (
    <div className={greetingClass}>
      <div className="greeting-container">
        <div className="text-inner">
          <p>Dear Muhammad Yunita Ng,</p>
          <h2>You Are Invited!</h2>
          <p>Wedding Celebration of</p>
          <h1>Antoni & Sinthia</h1>
        </div>
        <div className="btn-open" onClick={handleOpenInvitation}>
          <IoMdHeart size="18px"/>
          <span className="text-open">Open Invitation</span>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
