const chrome = {
    topSites: {
        get: (fn) => fn([
            {title: 'Facebook', url: 'https://facebook.com'},
            {title: 'Google', url: 'https://google.com'},
            {title: 'YouTube', url: 'https://youtube.com'},
            {title: '(120) Inbox', url: 'https://gmail.com'},
            {title: '(2) WhatsApp', url: 'https://whatsapp.com'},
        ])
    },
    tabs: {update: ({url}) => window.location.href = url}
};
export default chrome;