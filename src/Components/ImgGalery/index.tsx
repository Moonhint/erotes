import { useState, useEffect } from 'react';
import { imageInGalery } from './images';
import GaleryContainer from './GaleryContainer';
import './ImgGalery.css';


function ImgGalery() {

    const [ visibleIndex, setVisibleIndex ] = useState(0);

    useEffect(()=>{
        const galeryInterval = setInterval(() => {
            if (visibleIndex === imageInGalery.length - 1) {
                setVisibleIndex(0);
            }else {
                setVisibleIndex(visibleIndex + 1);
            }
        }, 3000);

        return () => {
            clearInterval(galeryInterval);
        }
    }, [visibleIndex]);

    return (
        <div className="img-galery">
            <GaleryContainer visibleIndex={visibleIndex} />
        </div>
    );
}

export default ImgGalery;
