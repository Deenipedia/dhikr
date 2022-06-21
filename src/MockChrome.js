const chrome = {
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
export default chrome;