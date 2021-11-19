import { IoIosArrowForward } from "react-icons/io";

import './Greeting.css';

function Greeting() {

  

  const handleOpenInvitation = () => {

  }

  return (
    <div className="greeting">
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
