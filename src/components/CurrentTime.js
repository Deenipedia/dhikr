import {useState} from "react";

const CurrentTime = () => {
    const [currentT, setCurrentT] = useState([])

    setInterval(() => {
            let today = new Date();
            let hu = today.getHours() > 0 ? today.getHours() : 24;
            let mu = today.getMinutes();
            let tct = []
            for (let i = 0; i < 24; i++) tct.push(<li></li>);
            tct[hu - 1] = <li className="active-time">{(hu < 10 ? ("0" + hu) : hu) + ":" + (mu < 10 ? ("0" + mu) : mu)}
                <apm>{hu > 12 ? "pm" : "am"}</apm>
            </li>
            setCurrentT(tct)
        }, 3000
    )

    return <div className="lr-clock-holder">
        <ul>{currentT}</ul>
    </div>
};

export default CurrentTime