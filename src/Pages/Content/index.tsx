import { useState, useEffect } from 'react';
import HeroBanner from '../../Components/HeroBanner';
import ShowCaseOne from '../../Components/ShowCaseOne';
import ShowCaseTwo from '../../Components/ShowCaseTwo';
import AntoniInfo from '../../Components/AntoniInfo';
import SinthiaInfo from '../../Components/SinthiaInfo';
import InfoPemberkatan from '../../Components/InfoPemberkatan';
import InfoResepsi from '../../Components/InfoResepsi';
import CountdownTimer from '../../Components/CountdownTimer';
import RSVPForm from '../../Components/RSVPForm';
import ImgGalery from '../../Components/ImgGalery';
import GuessBook from '../../Components/GuessBook';
import MainFooter from '../../Components/MainFooter';
import VideoSide from '../../Components/VideoSide';
import QRInfo from '../../Components/QRInfo';

import imgPrewedTwo from '../../imgs/prewed-two.jpg';
import imgPrewedThree from '../../imgs/prewed-three.jpg';

import './Content.css';

function Content({ song, currUser, setCurrUser, width80 }: { song: any, currUser: any, setCurrUser: any, width80: any }) {
    const [contentClassName, setContentClassName] = useState('no-content');

    useEffect(()=>{
        setTimeout(()=>{
            setContentClassName('content');
        }, 2000);
    },[]);

    const showCasePrewed = [
        {
            title: 'We Found Love',
            desc: '“You don’t love someone for their looks, or their clothes or their fancy car, but because they sing a song only you can hear.”',
            img: imgPrewedTwo,
            rightRadius: false,
        },
        {
            title: 'One Love',
            desc: '“Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry.”',
            img: imgPrewedThree,
            rightRadius: true,
        }
    ]
    return (
        <div className={contentClassName}>
            <HeroBanner/>
            <ShowCaseOne/>
            <ShowCaseTwo 
                title={showCasePrewed[0].title} 
                desc={showCasePrewed[0].desc} 
                img={showCasePrewed[0].img}
                rightRadius={showCasePrewed[0].rightRadius} 
            />
            <ShowCaseTwo 
                title={showCasePrewed[1].title} 
                desc={showCasePrewed[1].desc} 
                img={showCasePrewed[1].img}
                rightRadius={showCasePrewed[1].rightRadius} 
            />
            <div className="divider-content"/>
            <AntoniInfo/>
            <SinthiaInfo/>
            <InfoPemberkatan/>
            <InfoResepsi/>
            <CountdownTimer/>
            <RSVPForm currUser={currUser} setCurrUser={setCurrUser}/>
            <QRInfo/>
            <VideoSide song={song} width80={width80}/>
            <ImgGalery/>
            <GuessBook currUser={currUser} />
            <MainFooter/>
        </div>
    );
}

export default Content;
