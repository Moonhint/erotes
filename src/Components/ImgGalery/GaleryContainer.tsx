import { useState, useEffect } from 'react';
import { imageInGalery } from './images';
import { CSSTransition } from 'react-transition-group';

function GaleryContainer({ visibleIndex }: { visibleIndex: number } ) {

    const [inProp, setInProp] = useState(false);
    const [inPropTwo, setInPropTwo] = useState(false);
    const [inPropThree, setInPropThree] = useState(false);
    
    useEffect(()=>{
        if (visibleIndex === 0) {
            setInProp(true);
            setInPropTwo(false);
            setInPropThree(false);
        }
        if (visibleIndex === 1) {
            setInProp(false);
            setInPropTwo(true);
            setInPropThree(false);
        }
        if (visibleIndex === 2) {
            setInProp(false);
            setInPropTwo(false);
            setInPropThree(true);
        }
    }, [visibleIndex]);

    return (
        <div className="galery-container">
            <div className="galery-topping"/>
            { inProp ? (
                <>
                    <img className="image-one" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
            { inPropTwo ? (
                <>
                    <img className="image-two" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
            { inPropThree ? (
                <>
                    <img className="image-three" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
        </div>
    );
}

export default GaleryContainer;
