import {useLocalStorage} from "../Utils";
import {useEffect, useState} from "react";

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
    const [apiData, setApiData] = useLocalStorage('namazTimes', null);

    // This might not be the best way to handle this scenario.
    // Open to contributions
    const [waited, setWaited] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setWaited(true), 1);

        if (waited) {
            const currentTime = new Date().getTime();
            if (!(apiData && apiData.lastUpdated + 1000 * 60 * 60 > currentTime))
                retrieveNamazTimes(setApiData);
        }

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [waited]);

    return apiData;
};
