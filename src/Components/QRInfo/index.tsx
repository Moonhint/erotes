import './QRInfo.css';
import gopay from '../../imgs/payment/gopay.png';
// import qrbca from '../../imgs/qrs/bca.jpg';
// import { IoLogoInstagram } from "react-icons/io";

function QRInfo() {
    return (
        <div className="qr-info">
            <h2>Wedding Gift</h2>
            <p>For family and friends who would like to send a gift. We would be glad to receive it. Tap the following buttons to send them to us:</p>
            <div className="btn-container">
                <button className="bca">BCA</button>
                <button className="btn-gopay"><img src={gopay} alt="" /></button>
                <button className="ovo">Ovo</button>
            </div>
            <div className="gift-link">
                {/* <div className="qr-container">
                    <img src={qrbca} alt="" width="100px" height="100px"/>
                </div> */}
                {/* <p>BCA </p> */}
            </div>
        </div>
    );
}

export default QRInfo;
