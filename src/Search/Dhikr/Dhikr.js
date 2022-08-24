// import "./Dhikr.css"
import {useEffect, useState} from "react";

const URL = "https://raw.githubusercontent.com/NHSanto/dhikr/main/public/dhikr.json";

const Dhikr = () => {
    const [dhikr, setDhikr] = useState();

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(list => list[Math.floor(Math.random() * list.length)])
            .then(setDhikr)
    }, []);

    return dhikr && (
        <div className="Dhikr flex min-h-[22vh] w-full flex-col justify-center items-center">
            <h4>{dhikr.ARABIC}</h4>
            {dhikr.BANGLA_UCCHARON.length < 25 && <h1>{dhikr.BANGLA_UCCHARON}</h1>}
            <p>{dhikr.BANGLA_ORTHO}</p>
        </div>
    )
};


export default Dhikr;
