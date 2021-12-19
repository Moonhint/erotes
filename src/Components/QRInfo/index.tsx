import { useState } from 'react';
import './QRInfo.css';
import gopay from '../../imgs/payment/gopay.png';
import ovo from '../../imgs/payment/ovo.png';
import bca from '../../imgs/payment/bca.png';
import qrbca from '../../imgs/qrs/bca.jpg';
import qrovo from '../../imgs/qrs/ovo.jpg';
import qrgopay from '../../imgs/qrs/gopay.jpg';

function QRInfo() {

    const [ selectedBtn, setSelectedButton ] = useState('');
    const [ copyiedValue, setCopiedValue ] = useState(false);
    const handleBcaClicked = () => {
        setSelectedButton('bca');
        setCopiedValue(false);
    }

    const handleOvoClicked = () => {
        setSelectedButton('ovo');
        setCopiedValue(false);
    }

    const handleGopayClicked = () => {
        setSelectedButton('gopay');
        setCopiedValue(false);
    }

    const copyToClipboard = (value: string) => {
        let boardId = 'phone-number-gopay';

        if (value === 'gopay'){
            boardId = 'phone-number-gopay';
        }else if (value === 'ovo') {
            boardId = 'phone-number-ovo';
        }else if (value === 'bca') {
            boardId = 'rek-bca';
        }

        let copyText:any = document.getElementById(boardId);

        if (copyText){
            navigator.clipboard.writeText(copyText.innerText);
            setCopiedValue(true);
        }
    }
    
    const renderQrCodes = () => {

        if (selectedBtn === 'gopay'){
            return (
                <div className="qr-container">
                    <img src={qrgopay} alt="" width="100px" height="100px"/>
                    <div className="qr-description">
                        <p>Gopay - Antoni - 0817-7664-6792</p>
                        <span className="board-hidden" id="phone-number-gopay">081776646792</span>
                        <button onClick={() => copyToClipboard('gopay')}>Copy Number</button>
                    </div>
                    { copyiedValue ? <p className="copied">Copied!</p> : null}
                </div>                
            );
        }else if (selectedBtn === 'ovo'){
            return (
                <div className="qr-container">
                    <img src={qrovo} alt="" width="100px" height="100px"/>
                    <div className="qr-description">
                        <p>Ovo - Antoni - 0817-7664-6792</p>
                        <span className="board-hidden" id="phone-number-ovo">081776646792</span>
                        <button onClick={() => copyToClipboard('ovo')}>Copy Number</button>
                    </div>
                    { copyiedValue ? <p className="copied">Copied!</p> : null}
                </div>
            );
        }else if (selectedBtn === 'bca'){
            return (
                <div className="qr-container">
                    <img src={qrbca} alt="" width="100px" height="100px"/>
                    <div className="qr-description">
                        <p>BCA - Antoni - 22-800-501-24</p>
                        <span className="board-hidden" id="rek-bca">2280050124</span>
                        <button onClick={() => copyToClipboard('bca')}>Copy Number</button>
                    </div>
                    { copyiedValue ? <p className="copied">Copied!</p> : null}
                </div>
            )
        }else {
            return null;
        }
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
