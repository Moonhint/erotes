import { useState, useEffect } from 'react';
import './Content.css';

function Content() {
    const [contentClassName, setContentClassName] = useState('no-content');

    useEffect(()=>{
        setTimeout(()=>{
            setContentClassName('content');
        }, 2000);
    },[]);

    return (
        <div className={contentClassName}>
            <div>
                Hero Banner
            </div>
            <div>
                Prewed Case 1
            </div>
            <div>
                Prewed Case 2
            </div>
            <div>
                Prewed Case 3
            </div>
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
