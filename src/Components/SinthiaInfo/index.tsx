import './SinthiaInfo.css';
import imgSinthia from '../../imgs/sinthia.jpg';
import { IoLogoInstagram } from "react-icons/io";

function SinthiaInfo() {
    return (
        <div className="sinthia-info">
            <div className="left-side">
                <img src={imgSinthia} alt="" width="144px" height="144px"  />
            </div>
            <div className="right-side">
                <h4>Sinthia</h4>
                <div className="info-container">
                    <p>
                        <strong>Putri dari</strong>
                    </p>
                    <p>Bpk. Herry Sudiono</p>
                    <p>& Ibu Maria Francisca Pranoto</p>
                </div>
                <div className="sosmed-container">
                    <IoLogoInstagram color="#FFF" size="20px"/>
                </div>
            </div>
        </div>
    );
}

export default SinthiaInfo;
