import "./CurrentTime.css";
import {useEffect, useState} from "react";

const getTimeCounter = () => {
    const today = new Date();
    const hour = today.getHours() > 0 ? today.getHours() : 24;
    const timeCounter = []
    for (let i = 0; i < 24; i++) timeCounter.push(<li key={i}></li>);
    const time = today.toLocaleString('en-US', { hour: 'numeric',  minute: 'numeric', hour12: true })
        .toLowerCase();
    timeCounter[hour - 1] =
        <li className="active-time" key={time}>{time}</li>
    return timeCounter;
};

const CurrentTime = () => {
    const [timeCounter, setTimeCounter] = useState(getTimeCounter());

    useEffect(() => {
        const id = setInterval(() => setTimeCounter(getTimeCounter()), 3000);
        return () => clearInterval(id);
    }, []);

    return <div className="CurrentTime-holder">
        <ul>{timeCounter}</ul>
    </div>
};

export default CurrentTime