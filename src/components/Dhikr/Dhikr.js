import {useEffect, useState} from "react";
import "./Dhikr.css"

const URL = "https://raw.githubusercontent.com/NHSanto/dhikr/main/public/data.json";

const Dhikr = () => {
    const [dhikr, setDhikr] = useState();

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(list => list[Math.floor(Math.random() * list.length)])
            .then(setDhikr)
    }, []);

    return dhikr && (
        <div className="Dhikr">
            <h4>{dhikr.ARABIC}</h4>
            {dhikr.BANGLA_UCCHARON.length < 25 && <h1>{dhikr.BANGLA_UCCHARON}</h1>}
            <p>{dhikr.BANGLA_ORTHO}</p>
        </div>
    )
};


export default Dhikr;
