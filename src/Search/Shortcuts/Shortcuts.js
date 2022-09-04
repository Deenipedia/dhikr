import {useEffect, useState} from "react";
import {chrome, faviconPrefix} from "../../Utils";

const shorten = text => text.length > 14 ? text.slice(0, 12) + '...' : text

const favUrl = site => faviconPrefix() + site.url

const Shortcuts = () => {
    const [topSites, setTopSites] = useState([]);

    useEffect(() => {
        chrome.topSites.get(sites => setTopSites(sites.slice(0, 5)))
    }, [])

    const shortCuts = topSites.map((site) => {
        return <a key={site.url} className="Shortcuts-Site flex flex-col justify-center content-center items-center py-[5px] px-[5px] m-[15px] relative border border-[rgba(0, 0, 0, 0)] border-dashed" href={site.url}>
                <div className="Shortcuts-Site-Box bg-[rgba(161, 161, 161, 0.85)] rounded-lg absolute top-[10px] -right-2 overflow-y-hidden opacity-0 max-h-0 p-0 transition-[.3s] z-[99]">
                    <svg height="20" viewBox="0 0 11 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.201172" y="0.00769043" width="10" height="10" rx="5" fill="white"/>
                        <rect x="0.201172" y="17.0077" width="10" height="10" rx="5" fill="white"/>
                        <rect x="0.201172" y="34.0077" width="10" height="10" rx="5" fill="white"/>
                    </svg>
                </div>
                <div className="Shortcut-Logo flex justify-center items-center w-[6vw] h-[6vw] max-w-[60px] max-h-[60px] bg-[rgba(23, 169, 99, 0.08)] rounded-[10px] text-[20px] font-black backdrop-blur-[2px]"><img src={favUrl(site)} alt="icon"/></div>
                <p className=" text-[10px] max-w-full text-center overflow-visible text-ellipsis mt-[.3vw]">{shorten(site.title)}</p>
            </a>;
        }
    );

    return <div className="Shrotcuts flex flex-wrap flex-row max-w-[500px] justify-center items-center content-center mb-5">{shortCuts}</div>;
};


export default Shortcuts;

