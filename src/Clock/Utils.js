import {useLocalStorage} from "../Utils";
import {useEffect} from "react";

export const getFormattedTime = (hour, minute) => {
    minute = minute < 10 ? "0" + minute : minute;
    return hour > 12 ? (hour - 12) + ":" + minute : hour + ":" + minute;
};

const retrieveNamazTimes = (setData) => {
    new Promise((resolve) => navigator.geolocation.getCurrentPosition(({coords}) => resolve(coords)))
        .then(({latitude, longitude}) => `method=1&school=1&latitude=${latitude}&longitude=${longitude}`)
        .then(query => fetch(`http://api.aladhan.com/v1/timings?${query}`))
        .then(response => response.json())
        .then(({data}) => setData({...data, lastUpdated: new Date().getTime()}));
};

export const useNamazApi = () => {
    const [apiData, setApiData,done] = useLocalStorage('namazTimes', null);
    useEffect(() => {
        if (done) {
            const currentTime = new Date().getTime();
            if (!(apiData && apiData.lastUpdated + 1000 * 60 * 60 > currentTime))
                retrieveNamazTimes(setApiData);
        }
    }, [done]);

    return apiData;
};
