import axios from "axios";
import {useEffect, useState} from "react";

const location = {
    latitute: '23',
    longitute: '90'
};
const url = `http://api.aladhan.com/v1/timings/1398332113?latitude=${location.latitute}&longitude=${location.longitute}&method=2`

const hiddenTimes = ['Imsak', 'Midnight'];

const NamazTimes = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios(url).then(({data})=> setData(data))
    }, [])

    const post = [];
    for (let i = 0; i < 24; i++) {
        post[i] = <li key={i}></li>
    }

    const addNamazDescription = (name, time) => {
        const [hour, minute] = time.split(":").map(x => parseInt(x));
        const roundedTime = hour + Math.round(minute / 60);
        post[roundedTime - 1] =
            <li key={name}>
                <b>{name}</b> {hour > 12 ? (hour - 12) + ":" + minute : hour + ":" + minute}
                <apm>{hour > 12 ? "pm" : "am"}</apm>
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

    return <div className="ll-clock-holder"><h4>Namaz Times</h4><ul>{post}</ul></div>;
};


export default NamazTimes