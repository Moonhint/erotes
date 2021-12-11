import './MainFooter.css';
import comImg from '../../imgs/com-logo.png';

function MainFooter() {
    return (
        <div className="main-footer">
            <p>Made with ❤️ by</p>
            <div className="logo-com">
                <img src={comImg} alt="" />
            </div>
            {/* <h2>Antoni Development</h2> */}
        </div>
    );
}

export default MainFooter;
