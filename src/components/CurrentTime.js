import {useState} from "react";
import {getFormattedTime} from "../Utils";

const getTimeCounter = () => {
    const today = new Date();
    const hour = today.getHours() > 0 ? today.getHours() : 24;
    const timeCounter = []
    for (let i = 0; i < 24; i++) timeCounter.push(<li key={i}></li>);
    const time = getFormattedTime(hour, today.getMinutes())
    timeCounter[hour - 1] =
        <li className="active-time" key={time}>{time}<span> {hour > 12 ? "pm" : "am"}</span></li>
    return timeCounter;
};

const CurrentTime = () => {
    const [timeCounter, setTimeCounter] = useState(getTimeCounter());
    setInterval(() => setTimeCounter(getTimeCounter()), 3000);
    return <div className="lr-clock-holder">
        <ul>{timeCounter}</ul>
    </div>
};

export default CurrentTime