import './ShowCaseOne.css';
import imgFlower from '../../imgs/flower.png';
import imgPrewedOne from '../../imgs/prewed-one.jpg';

function ShowCaseOne() {
    return (
        <div className="show-case-one">
            <div className="content-container">
                <img src={imgFlower} alt="" width="40px" height="40px" />
                <p>and said, ‘For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh’, So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.</p>
                <p><strong>(Matthew 19:5-6)</strong></p>
            </div>
            <div className="showcase-img-container">
                <img src={imgPrewedOne} alt="" />
            </div>
        </div>
    );
}

export default ShowCaseOne;
