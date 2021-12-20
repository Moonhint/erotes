// import { useState } from 'react';
import './HealthProtocol.css';
import protocolOne from '../../imgs/protocol-1.png';
import protocolTwo from '../../imgs/protocol-2.png';
import protocolThree from '../../imgs/protocol-3.png';
import protocolFour from '../../imgs/protocol-4.png';

function HealthProtocol() {

    return (
        <div className="health-protocol">
            <h2>Health Protocol</h2>
            <p>It’s important to us that everyone stays safe, please read carefully our Wedding Day Covid-19 Guidance before attending the event:</p>
            <div className="health-protocol-container">
                <div className="item-container">
                    <h4>Social Distancing</h4>
                    <img src={protocolOne} alt="" />
                    <p>Keeping each other apart when attending events</p>
                </div>
                <div className="item-container">
                    <h4>Wear a Mask</h4>
                    <img src={protocolTwo} alt="" />
                    <p>Must use masks during the event</p>
                </div>
                <div className="item-container">
                    <h4>Wash Your Hand</h4>
                    <img src={protocolThree} alt="" />
                    <p>Wash hands and use Hand Sanitizer</p>
                </div>
                <div className="item-container">
                    <h4>Temperature Check</h4>
                    <img src={protocolFour} alt="" />
                    <p>Check the temperature when entering the event room</p>
                </div>
            </div>
        </div>
    );
}

export default HealthProtocol;
