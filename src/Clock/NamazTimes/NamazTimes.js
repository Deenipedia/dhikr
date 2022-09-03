import "./NamazTimes.css";
import {getFormattedTime, useNamazApi} from "../Utils";

const visibleTimes = ['Fajr', 'Sunrise','Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const createTimeline = ({timings}) => {
    const timeline = [];
    for (let i = 0; i < 24; i++) timeline[i] = <li key={i}></li>

    const addNamazDescription = (name, time) => {
        const [hour, minute] = time.split(":").map(x => parseInt(x));
        const roundedTime = hour + Math.round(minute / 60);
        timeline[roundedTime - 1] =
            <li key={name}>
                <b>{name}</b> {getFormattedTime(hour, minute)}
                <span> {hour >= 12 ? "pm" : "am"}</span>
            </li>;
    };

    if (timings) {
        Object
            .keys(timings)
            .filter(key => visibleTimes.some(time => time === key))
            .map(key => [key, timings[key]])
            .forEach(([name, time]) => addNamazDescription(name, time));
    }

    return timeline;
};

const NamazTimes = () => {
    const apiData = useNamazApi();

    return apiData ?
        <div className="ll-clock-holder">
            <h4><img src="/assets/dhikr_64x64.png" alt="Dhikr logo 64x64"/></h4>
            <ul>{createTimeline(apiData)}</ul>
        </div> :
        <></>;
};


export default NamazTimes;