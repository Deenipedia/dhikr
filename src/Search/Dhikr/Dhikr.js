import {useEffect, useState} from "react";

const Dhikr = () => {
    const [dhikr, setDhikr] = useState();

    useEffect(() => {
        fetch("/data/dhikr.json")
            .then(res => res.json())
            .then(list => list[Math.floor(Math.random() * list.length)])
            .then(setDhikr)
    }, []);

    return dhikr && (
        <div className="text-center md:w-[40vw] w-[35vw] flex min-h-[20vh] flex-col justify-center items-center ">
            <h4 className="mt-[30px] font-serif font-semibold text-[#17A963] text-[28px] md:text-[5.5vh]">{dhikr.ARABIC}</h4>
            {dhikr.BANGLA_UCCHARON.length < 25 && <h1 className="text-[28px] md:text-[7.5vh]">{dhikr.BANGLA_UCCHARON}</h1>}
            <p>{dhikr.BANGLA_ORTHO}</p>
        </div>
    )
};


export default Dhikr;
