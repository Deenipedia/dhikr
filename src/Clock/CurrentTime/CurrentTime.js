import "./CurrentTime.css";
import {useEffect, useState} from "react";

const getTimeCounter = () => {
    const today = new Date();
    const hour = today.getHours() > 0 ? today.getHours() : 24;
    const timeCounter = []
    for (let i = 0; i < 24; i++) timeCounter.push(<li className=" pl-[2.7vh] h-[3vh]" key={i}></li>);
    const time = today.toLocaleString('en-US', { hour: 'numeric',  minute: 'numeric', hour12: true })
        .toLowerCase();
    timeCounter[hour - 1] =
        <li className="active-time md:text-[15px] text-[10px] pl-0 pr-0 font-sans relative leading-[3vh] pl-[2.7vh] h-[3vh] before:content-none before:w-[2vh] before:h-[1.2vh] before:leading-[3vh]
        " key={time}>{time}</li>
    return timeCounter;
};

const CurrentTime = () => {
    const [timeCounter, setTimeCounter] = useState(getTimeCounter());

    useEffect(() => {
        const id = setInterval(() => setTimeCounter(getTimeCounter()), 3000);
        return () => clearInterval(id);
    }, []);

    return <div className="CurrentTime-holder flex flex-row items-end p-[2px] h-[100%-4px] ">
        <ul className="">{timeCounter}</ul>
    </div>
};

export default CurrentTime