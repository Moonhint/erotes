import { useState, useEffect } from 'react';
import HeroBanner from '../../Components/HeroBanner';
import ShowCaseOne from '../../Components/ShowCaseOne';
import ShowCaseTwo from '../../Components/ShowCaseTwo';

import imgPrewedOne from '../../imgs/prewed-one.jpeg';

import './Content.css';

function Content() {
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
            img: imgPrewedOne,
            rightRadius: false,
        },
        {
            title: 'One Love',
            desc: '“Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry.”',
            img: imgPrewedOne,
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
            <div>
                Antoni Info
            </div>
            <div>
                Sinthia Info
            </div>
            <div>
                Pemberkatan Info
            </div>
            <div>
                Resepsi Info
            </div>
            <div>
                Countdown timer
            </div>
            <div>
                RSVP
            </div>
            <div>
                Guestbook
            </div>
            <div>
                Footer
            </div>
        </div>
    );
}

export default Content;
