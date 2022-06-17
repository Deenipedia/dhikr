import {useState} from "react";

const CurrentTime = () => {
    const [currentT, setCurrentT] = useState([])

    setInterval(() => {
            const today = new Date();
            const hu = today.getHours() > 0 ? today.getHours() : 24;
            const mu = today.getMinutes();
            const tct = []
            for (let i = 0; i < 24; i++) tct.push(<li key={i}></li>);
            const time = (hu < 10 ? ("0" + hu) : hu) + ":" + (mu < 10 ? ("0" + mu) : mu);
            tct[hu - 1] = <li className="active-time" key={time}>{time}<span>{hu > 12 ? "pm" : "am"}</span></li>
            setCurrentT(tct)
        }, 3000
    )

    return <div className="lr-clock-holder">
        <ul>{currentT}</ul>
    </div>
};

export default CurrentTime