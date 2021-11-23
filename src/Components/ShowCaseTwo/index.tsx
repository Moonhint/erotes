import './ShowCaseTwo.css';

interface PropsType {
    title: string;
    desc: string;
    img: string;
}
function ShowCaseTwo(props:PropsType) {
    return (
        <div className="show-case-two">
            <div className="content-two-container">
                <div className="title">
                    <p>{props.title}</p>
                </div>
                <div className="divider">

                </div>
                <div className="description">
                    {props.desc}
                </div>
            </div>
            <div className="showcase-two-img-container">
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default ShowCaseTwo;
