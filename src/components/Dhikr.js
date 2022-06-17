import {useEffect, useState} from "react";

const URL = "https://raw.githubusercontent.com/Deenipedia/dhikr/master/data.json";

const Dhikr = () => {
    const [dhikr, setDhikr] = useState({});

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(list => list[Math.floor(Math.random() * list.length)])
            .then(setDhikr)
    }, []);

    console.log(dhikr);

    return (
        <div className="mt-content">
            <h4>{dhikr.ARABIC}</h4>
            <h1>{dhikr.BANGLA_UCCHARON}</h1>
            <p>{dhikr.BANGLA_ORTHO}</p>
        </div>
    );
};


export default Dhikr;
