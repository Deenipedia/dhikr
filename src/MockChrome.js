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
            {title: 'Facebook', url: 'https://facebook.com'},
            {title: 'Google', url: 'https://google.com'},
            {title: 'YouTube', url: 'https://youtube.com'},
            {title: '(120) Inbox', url: 'https://gmail.com'},
            {title: '(2) WhatsApp', url: 'https://whatsapp.com'},
        ])
    }
};
export default chrome;