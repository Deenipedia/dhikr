import "./NamazTimes.css";
import {useEffect, useState} from "react";
import {chrome, getFormattedTime, useLocalStorage} from "../../Utils";

const visibleTimes = ['Fajr', 'Sunrise','Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const retrieveNamazTimes = (setData) => {
    new Promise((resolve) => navigator.geolocation.getCurrentPosition(({coords}) => resolve(coords)))
        .then(({latitude, longitude}) => `method=1&school=1&latitude=${latitude}&longitude=${longitude}`)
        .then(query => fetch(`http://api.aladhan.com/v1/timings?${query}`))
        .then(response => response.json())
        .then(({data}) => setData({...data, lastUpdated: new Date().getTime()}));
};

const NamazTimes = () => {
    const [apiData, setApiData] = useLocalStorage('namazTimes', null);

    useEffect(() => {
        const currentTime = new Date().getTime();
        if (!(apiData && apiData.lastUpdated + 1000 * 60 * 60 > currentTime))
            retrieveNamazTimes(setApiData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!apiData)
        return <></>;

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

    const timings = apiData.timings;

    if (timings) {
        Object
            .keys(timings)
            .filter(key => visibleTimes.some(time => time === key))
            .map(key => [key, timings[key]])
            .forEach(([name, time]) => addNamazDescription(name, time));
    }

    return <div className="ll-clock-holder">
        <h4><img src={"/dhikr_64x64.png"} alt={"Dhikr logo 64x64"}/></h4>
        <ul>{post}</ul>
    </div>;
};


export default NamazTimes;