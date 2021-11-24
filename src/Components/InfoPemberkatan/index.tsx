import { IoMdPin } from "react-icons/io";
import './InfoPemberkatan.css';

function InfoPemberkatan() {
    const handleOpenLocation = () => {
        console.log('location');
    };
      
    return (
        <div className="info-pemberkatan">
            <div className="wave-top"/>
            <div className="container">
                <div className="top-container">
                    <h2>Pemberkatan Nikah</h2>
                    <div className="divider"/>
                    <div className="info-content">
                        <p>Jumat, 31 Desember 2021</p>
                        <p>10:00 WIB</p>
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
        </div>
    );
}

export default InfoPemberkatan;
