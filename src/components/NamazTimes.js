import axios from "axios";
import {useEffect, useState} from "react";
import {getFormattedTime} from "../Utils";

const hiddenTimes = ['Imsak', 'Midnight'];

const NamazTimes = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) =>
            axios(`http://api.aladhan.com/v1/timings?method=1&school=1&latitude=${latitude}&longitude=${longitude}`)
                .then(({data}) => setData(data)))
    }, [])

    const post = [];
    for (let i = 0; i < 24; i++) post[i] = <li key={i}></li>

    const addNamazDescription = (name, time) => {
        const [hour, minute] = time.split(":").map(x => parseInt(x));
        const roundedTime = hour + Math.round(minute / 60);
        post[roundedTime - 1] =
            <li key={name}>
                <b>{name}</b> {getFormattedTime(hour, minute)}
                <span> {hour > 12 ? "pm" : "am"}</span>
            </li>;
    };

    const timings = data.data?.timings;

    if (timings) {
        Object
            .keys(timings)
            .filter(key => hiddenTimes.every(time => time !== key))
            .map(key => [key, timings[key]])
            .forEach(([name, time]) => addNamazDescription(name, time));
    }

    return <div className="ll-clock-holder"><h4>Namaz Times</h4>
        <ul>{post}</ul>
    </div>;
};


export default NamazTimes;