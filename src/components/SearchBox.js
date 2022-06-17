/* eslint-disable no-undef */
import {useState} from "react";

const HTTP_REGEX = new RegExp("https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)");
const NON_HTTP_REGEX = new RegExp("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)");


const SearchBox = () => {
    const [value, setValue] = useState('');

    const goToUrl = () => {
        if (chrome) {
            if (value.match(HTTP_REGEX)) {
                chrome.tabs.update({url: value})
            } else if (value.match(NON_HTTP_REGEX)) {
                chrome.tabs.update({url: 'http://' + value})
            } else {
                chrome.tabs.update({url: 'https://google.com/search?q=' + encodeURI(value)})
            }
        }
    }

    return <input
        className="search-ic"
        autoFocus={true}
        value={value}
        onInput={event => setValue(event.target.value)}
        onKeyUp={({code}) => code === 'Enter' && goToUrl()}/>;
};
export default SearchBox;
