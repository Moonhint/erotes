import { useEffect, useState } from 'react';
import './CountdownTimer.css';

function CountdownTimer() {

    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');

    useEffect(()=>{
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        let wedding = "01/02/2022";

        const countDown = new Date(wedding).getTime();
        const x = setInterval(() => {    
            const now = new Date().getTime()
            const distance = countDown - now;
            
            const dayNum = Math.floor(distance / (day));
            const hourNum = Math.floor((distance % (day)) / (hour));
            const minuteNum = Math.floor((distance % (hour)) / (minute));
            const secondNum = Math.floor((distance % (minute)) / second);

            const dayStr = dayNum < 10 ? `0${dayNum}` : String(dayNum);
            const hourStr = hourNum < 10 ? `0${hourNum}` : String(hourNum);
            const minuteStr = minuteNum < 10 ? `0${minuteNum}` : String(minuteNum);
            const secondStr = secondNum < 10 ? `0${secondNum}` : String(secondNum);

            setDay(dayStr);
            setHour(hourStr);
            setMinute(minuteStr);
            setSecond(secondStr);

            if (distance < 0) {
                clearInterval(x);
            }
        }, 1);

    }, []);

    return (
        <div className="countdown-timer">
            <h4>Counting down to the big day</h4>
            <div className="timer-container">
                <div className="timer">
                    <p>{day}</p>
                    <p className="desc">Day</p>
                </div>
                <div className="divider">:</div>
                <div className="timer">
                    <p>{hour}</p>
                    <p className="desc">Hrs</p>
                </div>
                <div className="divider">:</div>
                <div className="timer">
                    <p>{minute}</p>
                    <p className="desc">Min</p>
                </div>
                <div className="divider">:</div>
                <div className="timer">
                    <p>{second}</p>
                    <p className="desc">Sec</p>
                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;
