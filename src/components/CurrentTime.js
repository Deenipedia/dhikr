import {useState} from "react";
import {getFormattedTime} from "../Utils";

const CurrentTime = () => {
    const [currentT, setCurrentT] = useState([])

    setInterval(() => {
            const today = new Date();
            const hour = today.getHours() > 0 ? today.getHours() : 24;
            const timeCounter = []
            for (let i = 0; i < 24; i++) timeCounter.push(<li key={i}></li>);
            const time = getFormattedTime(hour, today.getMinutes())
            timeCounter[hour - 1] = <li className="active-time" key={time}>{time}<span> {hour > 12 ? "pm" : "am"}</span></li>
            setCurrentT(timeCounter)
        }, 3000
    )

    return <div className="lr-clock-holder">
        <ul>{currentT}</ul>
    </div>
};

export default CurrentTime