import {useContext, useEffect, useState} from "react";
import {getFormattedTime} from "../../Utils";
import {ChromeContext} from "../../Contexts";
import "./NamazTimes.css";

const hiddenTimes = ['Imsak', 'Midnight'];

const retrieveNamazTimes = (chrome, setData) => {
    new Promise((resolve) => chrome.storage.local.clear(resolve))
        .then(_ => new Promise((resolve) => navigator.geolocation.getCurrentPosition(({coords}) => resolve(coords))))
        .then(({
                   latitude,
                   longitude
               }) => fetch(`http://api.aladhan.com/v1/timings?method=1&school=1&latitude=${latitude}&longitude=${longitude}`))
        .then(({data}) => chrome.storage.local.set({[new Date().getTime()]: data}, () => setData(data)))
};

const NamazTimes = () => {
    const chrome = useContext(ChromeContext);

    const [data, setData] = useState({});

    useEffect(() => {
        chrome.storage.local.get(null, data => {
            const currentTime = new Date().getTime();
            const keys = Object.keys(data).filter(time => time + 1000 * 60 * 60 > currentTime);
            if (keys.length) setData(data[keys[0]])
            else retrieveNamazTimes(chrome, setData);
        });
    }, [chrome])

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

    return <div className="NamazTimes"><h4>Namaz Times</h4>
        <ul>{post}</ul>
    </div>;
};


export default NamazTimes;