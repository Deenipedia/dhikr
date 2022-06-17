/* eslint-disable no-undef */
import {useEffect, useState} from "react";

const shorten = text => text.length > 14 ? text.slice(0, 12) + '...' : text

const Shortcuts = () => {
    const [topSites, setTopSites] = useState([]);

    useEffect(() => {
        chrome && chrome.topSites && chrome.topSites.get(sites => setTopSites(sites.slice(0, 10)))
    }, [])

    const shortCuts = topSites.map((site, i) =>
        <a className="tab-holder" href={site.url}>
            <div className="tab-edit-ic">
                <svg height="20" viewBox="0 0 11 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.201172" y="0.00769043" width="10" height="10" rx="5" fill="white"/>
                    <rect x="0.201172" y="17.0077" width="10" height="10" rx="5" fill="white"/>
                    <rect x="0.201172" y="34.0077" width="10" height="10" rx="5" fill="white"/>
                </svg>
            </div>
            <div className="tab-content">{i}</div>
            <p>{shorten(site.title)}</p>
        </a>
    );

    if (shortCuts.length) {
        shortCuts[shortCuts.length - 1] = <div className="tab-holder">
            <div className="tab-edit-ic">
                <svg height="20" viewBox="0 0 11 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.201172" y="0.00769043" width="10" height="10" rx="5" fill="white"/>
                    <rect x="0.201172" y="17.0077" width="10" height="10" rx="5" fill="white"/>
                    <rect x="0.201172" y="34.0077" width="10" height="10" rx="5" fill="white"/>
                </svg>
            </div>
            <div className="tab-content">+</div>
            <p>Add More</p></div>
    }

    return <div className="mid-quick-tab">{shortCuts}</div>;
};


export default Shortcuts;
