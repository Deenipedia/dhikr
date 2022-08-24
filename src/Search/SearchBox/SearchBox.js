import "./SearchBox.css";
import {useState} from "react";
import {chrome} from "../../Utils";

const HTTP_REGEX = new RegExp("http(s)?://([a-z|0-9].*)[a-z|0-9]\\.[a-z|0-9]+.*");
const NON_HTTP_REGEX = new RegExp("([a-z|0-9]*\\.*)[a-z|0-9]\\.[a-z|0-9]+.*");


const SearchBox = () => {
    const [value, setValue] = useState('');

    const goToUrl = () => {
        if (value.match(HTTP_REGEX)) {
            chrome.tabs.update({url: value})
        } else if (value.match(NON_HTTP_REGEX)) {
            chrome.tabs.update({url: 'http://' + value})
        } else {
            chrome.tabs.update({url: 'https://google.com/search?q=' + encodeURI(value)})
        }
    }

    return <input
        className="SearchBox relative w-full"
        autoFocus={true}
        value={value}
        placeholder="Search Google or Type a URL"
        onInput={event => setValue(event.target.value)}
        onKeyUp={({code}) => code === 'Enter' && goToUrl()}/>;
};
export default SearchBox;
