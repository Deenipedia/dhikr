import {useEffect, useState} from "react";

const mockChrome = {
    storage: {
        local: {
            get: (key, fn) => {
                const value = window.localStorage.getItem(key);
                fn(value && {[key]: JSON.parse(value)})
            },
            set: (data, fn) =>{
                Object.keys(data).forEach(key => window.localStorage.setItem(key, JSON.stringify(data[key])));
                fn && fn();
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

// noinspection JSUnresolvedVariable
const isFirefox = typeof InstallTrigger !== 'undefined';
const browserSpecificPrefix = isFirefox ? "https://s2.googleusercontent.com/s2/favicons?domain=" : "chrome://favicon/";
export const faviconPrefix = () => {
    if (process.env.REACT_APP_PRODUCTION) {
        return browserSpecificPrefix;
    } else {
        return "";
    }
};

export const chrome = window.chrome.topSites ? window.chrome : mockChrome;
export const useLocalStorage = (key, fallback) => {
    const [value, setValue] = useState(fallback);
    const [done, setDone] = useState(false);

    useEffect(() => {
        chrome.storage.local.get(key, value => {

            setDone(true)
            if(value!==null && value[key]!==null)
                setValue(value[key])
            })
    }, []);
    const saveValue = value => chrome.storage.local.set({[key]: value}, () => setValue(value));
    return [value, saveValue,done];
}

