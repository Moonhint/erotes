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
            content
        </div>
    );
}

export default Content;
