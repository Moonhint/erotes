import { IoMdPin } from "react-icons/io";
import './InfoResepsi.css';

function InfoResepsi() {
    const handleOpenLocation = () => {
        console.log('location');
    };
      
    return (
        <div className="info-resepsi">
            <div className="container">
                <div className="top-container">
                    <h2>Resepsi</h2>
                    <div className="divider"/>
                    <div className="info-content">
                        <p>Minggu, 2 Januari 2022</p>
                        <p>11:30 s/d 14:00 WIB</p>
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
