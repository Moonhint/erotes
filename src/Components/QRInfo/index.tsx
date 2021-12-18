import { useState } from 'react';
import './QRInfo.css';
import gopay from '../../imgs/payment/gopay.png';
import ovo from '../../imgs/payment/ovo.png';
import bca from '../../imgs/payment/bca.png';
import qrbca from '../../imgs/qrs/bca.jpg';
import qrovo from '../../imgs/qrs/ovo.jpg';
import qrgopay from '../../imgs/qrs/gopay.jpg';
// import { IoLogoInstagram } from "react-icons/io";

function QRInfo() {

    const [ selectedBtn, setSelectedButton ] = useState('');

    
    const renderQrCodes = () => {

        if (selectedBtn === 'gopay'){
            return (
                <div className="qr-container">
                    <img src={qrgopay} alt="" width="100px" height="100px"/>
                </div>                
            );
        }else if (selectedBtn === 'ovo'){
            return (
                <div className="qr-container">
                    <img src={qrovo} alt="" width="100px" height="100px"/>
                </div>
            );
        }else if (selectedBtn === 'bca'){
            return (
                <div className="qr-container">
                    <img src={qrbca} alt="" width="100px" height="100px"/>
                </div>
            )
        }else {
            return null;
        }
    }

    const handleBcaClicked = () => {
        setSelectedButton('bca');
    }

    const handleOvoClicked = () => {
        setSelectedButton('ovo');
    }

    const handleGopayClicked = () => {
        setSelectedButton('gopay');
    }

    return (
        <div className="qr-info">
            <h2>Wedding Gift</h2>
            <p>For family and friends who would like to send a gift. We would be glad to receive it. Tap the following buttons to send them to us:</p>
            <div className="btn-container">
                <button className="btn-bca" onClick={handleBcaClicked}><img src={bca} alt="" /></button>
                <button className="btn-gopay" onClick={handleGopayClicked}><img src={gopay} alt="" /></button>
                <button className="btn-ovo" onClick={handleOvoClicked}><img src={ovo} alt="" /></button>
            </div>
            <div className="gift-link">
                {renderQrCodes()}
            </div>
        </div>
    );
}

export default QRInfo;
