import {useContext, useEffect, useState} from "react";
import {ChromeContext} from "../Contexts";

const shorten = text => text.length > 14 ? text.slice(0, 12) + '...' : text
const favUrl = site => site.hasOwnProperty('favIconUrl') ? site.favIconUrl : 'chrome://favicon/' + site.url

const Shortcuts = () => {
    const chrome = useContext(ChromeContext);
    const [topSites, setTopSites] = useState([]);

    useEffect(() => {
        chrome.topSites.get(sites => setTopSites(sites.slice(0, 5)))
    }, [chrome])

    const shortCuts = topSites.map((site) => {
        return <a className="tab-holder" href={site.url}>
                <div className="tab-edit-ic">
                    <svg height="20" viewBox="0 0 11 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.201172" y="0.00769043" width="10" height="10" rx="5" fill="white"/>
                        <rect x="0.201172" y="17.0077" width="10" height="10" rx="5" fill="white"/>
                        <rect x="0.201172" y="34.0077" width="10" height="10" rx="5" fill="white"/>
                    </svg>
                </div>
                <div className="tab-content"><img src={favUrl(site)} alt="icon"/></div>
                <p>{shorten(site.title)}</p>
            </a>;
        }
    );

    return <div className="mid-quick-tab">{shortCuts}</div>;
};


export default Shortcuts;
