// @ts-nocheck

import { IoIosCalendar } from "react-icons/io";
import moment from "moment";
import { useEffect, useState } from 'react';
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import './CountdownTimer.css';

const wedding = "01/02/2022";

const startDatetime = new Date("2022-01-02T11:30");
const endDatetime = new Date("2022-01-02T14:00");
const duration = startDatetime.getHours() - endDatetime.getHours();
const event = {
  title: "Wedding of Antoni & Sinthia",
  description: "You can find the venue location <a href=https://g.page/hvertuharmoni?share>here</a>",
  location: "Ballroom Lt.5 - HARRIS Vertu Hotel Harmoni Jakarta",
  duration,
  endDatetime: moment(endDatetime).format("YYYYMMDDTHHmmssZ"),
  startDatetime: moment(startDatetime).format("YYYYMMDDTHHmmssZ")
};

const ATCDropdown = (args) => (
    <ul className="atc-dropdown">
        {args.children.map((link, i) => (
            <li key={i}>{link}</li>
        ))}
    </ul>
);

const ATCWrapper = (args) => (
    <a onClick={args.onClick} className="atc-item" href="/">
        <IoIosCalendar size="18px"/>
        <span className="text-open">{args.children}</span>
    </a>
);

const AddToCalendarDropdown = AddToCalendarHOC(ATCWrapper, ATCDropdown);

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
            <AddToCalendarDropdown
                linkProps={{className: "atc-dropdown-title"}}
                event={event}
            />
        </div>
    );
}

export default CountdownTimer;
