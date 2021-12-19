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
                <h4>Sinthia Tan</h4>
                <div className="info-container">
                    <p>
                        <strong>Daughter of</strong>
                    </p>
                    <p>Mr. Herry Sudiono</p>
                    <p>& Mrs. Maria Francisca Pranoto</p>
                </div>
                <a className="sosmed-container" href="https://instagram.com/sinthiatan?utm_medium=copy_link">
                    <IoLogoInstagram color="#FFF" size="20px"/>
                </a>
            </div>
        </div>
    );
}

export default SinthiaInfo;
