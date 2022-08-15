import {useEffect, useState} from "react";

export const getFormattedTime = (hour, minute) => {
    minute = minute < 10 ? "0" + minute : minute;
    return hour > 12 ? (hour - 12) + ":" + minute : hour + ":" + minute;
};

export const QuizState = {
    timerRunning: Symbol("timerRunning"),
    timerEnded: Symbol("timerEnded"),
    correctlyAnswered: Symbol("correctlyAnswered"),
    incorrectlyAnswered: Symbol("incorrectlyAnswered")
};

const mockChrome = {
    storage: {
        local: {
            clear: fn => window.localStorage.clear() || fn(),
            get: (_, fn) => {
                const storage = {};
                Object.keys(window.localStorage).forEach(key => storage[key] = JSON.parse(window.localStorage[key]))
                fn(storage)
            },
            set: (data, fn) => {
                const key = Object.keys(data)[0];
                window.localStorage.setItem(key, JSON.stringify(data[key]));
                fn();
            }
        }
    },
    tabs: {update: ({url}) => window.location.href = url},
    topSites: {
        get: (fn) => fn([
            {title: 'Facebook', url: 'https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico'},
            {title: 'LinkedIn', url: 'https://static-exp2.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca'},
            {title: 'YouTube', url: 'https://www.youtube.com/s/desktop/55d33fd3/img/favicon.ico'},
            {title: 'Twitter', url: 'https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89d8.svg'},
            {title: 'Drive', url: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png'},
        ])
    }
};

export const chrome = window.chrome.topSites ? window.chrome : mockChrome;

// TODO: use this for storage everywhere
export const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
