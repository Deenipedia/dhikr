const Shortcuts = () => {
    let shortCuts = []
    for (let i = 0; i < 10; i++) shortCuts.push(
        <div className="tab-holder">
            <div className="tab-edit-ic">
                <svg height="20" viewBox="0 0 11 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.201172" y="0.00769043" width="10" height="10" rx="5" fill="white"/>
                    <rect x="0.201172" y="17.0077" width="10" height="10" rx="5" fill="white"/>
                    <rect x="0.201172" y="34.0077" width="10" height="10" rx="5" fill="white"/>
                </svg>
            </div>
            <div className="tab-content">{i}</div>
            <p>Content Text ...</p></div>
    );

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

    return <div className="mid-quick-tab">{shortCuts}</div>;
};


export default Shortcuts;
