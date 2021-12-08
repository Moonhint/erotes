import './AntoniInfo.css';
import imgAntoni from '../../imgs/antoni.jpg';
import { IoLogoInstagram } from "react-icons/io";

function AntoniInfo() {
    return (
        <div className="antoni-info">
            <div className="left-side">
                <h4>Antoni Xu</h4>
                <div className="info-container">
                    <p>
                        <strong>Putra dari</strong>
                    </p>
                    <p>Bpk. Komardi (+)</p>
                    <p>& Ibu Ami</p>
                </div>
                <a className="sosmed-container" href="https://instagram.com/antoni.xu?utm_medium=copy_link">
                    <IoLogoInstagram color="#FFF" size="20px"/>
                </a>
            </div>
            <div className="right-side">
                <img src={imgAntoni} alt="" width="144px" height="144px"  />
            </div>
        </div>
    );
}

export default AntoniInfo;
