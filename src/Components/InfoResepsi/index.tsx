import { IoMdPin } from "react-icons/io";
import './InfoResepsi.css';

function InfoResepsi() {
    const handleOpenLocation = () => {
        window.open('https://maps.app.goo.gl/Z8A4KLzgBWdM3H9D6');
    };
      
    return (
        <div className="info-resepsi">
            <div className="container">
                <div className="top-container">
                    <h2>Reception</h2>
                    <div className="divider"/>
                    <div className="info-content">
                        <p>Sunday, January 2, 2022</p>
                        <p>11:30 WIB</p>
                        <h3>HARRIS Vertu Hotel</h3>
                        <p className="address">Hayam Wuruk - Gambir Jakarta Pusat</p>
                    </div>
                    <div className="btn-location" onClick={handleOpenLocation}>
                        <IoMdPin size="18px"/>
                        <span className="text-open">View Location</span>
                    </div>
                </div>
                <div className="bottom-image"/>
            </div>
            <div className="bottom-wave"/>
        </div>
    );
}

export default InfoResepsi;
