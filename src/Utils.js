import {useEffect, useState} from "react";

const mockChrome = {
    storage: {
        local: {
            get: (key, fn) => {
                const value = window.localStorage.getItem(key);
                fn(value && JSON.parse(value))
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

export const chrome = window.chrome.topSites ? window.chrome : mockChrome;

export const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(fallbackState);

    const _setValue = value => chrome.storage.local.set({[storageKey]: value}, () => setValue(value));

    useEffect(() => {
        chrome.storage.local.get(storageKey, value => _setValue(value ?? fallbackState));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storageKey, fallbackState]);

    return [value, _setValue];
};
