import { useState, useEffect } from 'react';
import { imageInGalery } from './images';

function GaleryContainer({ visibleIndex }: { visibleIndex: number } ) {

    const [inProp, setInProp] = useState(false);
    const [inPropTwo, setInPropTwo] = useState(false);
    const [inPropThree, setInPropThree] = useState(false);
    const [inPropFour, setInPropFour] = useState(false);
    const [inPropFive, setInPropFive] = useState(false);
    const [inPropSix, setInPropSix] = useState(false);
    const [inPropSeven, setInPropSeven] = useState(false);
    const [inPropEight, setInPropEight] = useState(false);
    
    useEffect(()=>{
        if (visibleIndex === 0) {
            setInProp(true);
            setInPropTwo(false);
            setInPropThree(false);
            setInPropFour(false);
            setInPropFive(false);
            setInPropSix(false);
            setInPropSeven(false);
            setInPropEight(false);
        }
        if (visibleIndex === 1) {
            setInProp(false);
            setInPropTwo(true);
            setInPropThree(false);
            setInPropFour(false);
            setInPropFive(false);
            setInPropSix(false);
            setInPropSeven(false);
            setInPropEight(false);
        }
        if (visibleIndex === 2) {
            setInProp(false);
            setInPropTwo(false);
            setInPropThree(true);
            setInPropFour(false);
            setInPropFive(false);
            setInPropSix(false);
            setInPropSeven(false);
            setInPropEight(false);
        }
        if (visibleIndex === 3) {
            setInProp(false);
            setInPropTwo(false);
            setInPropThree(false);
            setInPropFour(true);
            setInPropFive(false);
            setInPropSix(false);
            setInPropSeven(false);
            setInPropEight(false);
        }
        if (visibleIndex === 4) {
            setInProp(false);
            setInPropTwo(false);
            setInPropThree(false);
            setInPropFour(false);
            setInPropFive(true);
            setInPropSix(false);
            setInPropSeven(false);
            setInPropEight(false);
        }
        if (visibleIndex === 5) {
            setInProp(false);
            setInPropTwo(false);
            setInPropThree(false);
            setInPropFour(false);
            setInPropFive(false);
            setInPropSix(true);
            setInPropSeven(false);
            setInPropEight(false);
        }
        if (visibleIndex === 6) {
            setInProp(false);
            setInPropTwo(false);
            setInPropThree(false);
            setInPropFour(false);
            setInPropFive(false);
            setInPropSix(false);
            setInPropSeven(true);
            setInPropEight(false);
        }
        if (visibleIndex === 7) {
            setInProp(false);
            setInPropTwo(false);
            setInPropThree(false);
            setInPropFour(false);
            setInPropFive(false);
            setInPropSix(false);
            setInPropSeven(false);
            setInPropEight(true);
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
            { inPropFour ? (
                <>
                    <img className="image-four" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
            { inPropFive ? (
                <>
                    <img className="image-five" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
            { inPropSix ? (
                <>
                    <img className="image-six" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
            { inPropSeven ? (
                <>
                    <img className="image-seven" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
            { inPropEight ? (
                <>
                    <img className="image-eight" src={imageInGalery[visibleIndex].src} alt="" />
                </>
            ) : <></> }
        </div>
    );
}

export default GaleryContainer;
