import axios from "axios";
import { useEffect, useState } from "react";

const NamazTimes = () => {
    const post = []
    /* Apple section */
    const [data, setData] = useState({});
    const location = {
        latitute: '23',
        longitute: '90'
    };
    const url = `http://api.aladhan.com/v1/timings/1398332113?latitude=${location.latitute}&longitude=${location.longitute}&method=2`
    useEffect(() => {
        async function getNamajTime() {
            const result = await axios(url);
            //namazT=Object.values(result.data.timings);
            setData(result.data);
            //setData(result.data);

        };

        getNamajTime();
    }, [])
    const tmp = {...data.data?.timings};
    const namazT = Object.values(tmp);

    /* Apple section */


    for (let i = 0; i < 24; i++) post.push(<li></li>);
    const NNIndex = 0;

    let namazN = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Sunset", "Maghrib", "Isha", "Imsak", "Midnight"];
    namazT.forEach(it => {
        post[it - 1] = <li><b>{namazN[NNIndex]}</b> {it > 12 ? (it - 12) + ":00" : it + ":00"}
            <apm>{it > 12 ? "pm" : "am"}</apm>
        </li>;

        NNIndex++;
    });

    return <div className="ll-clock-holder"><h4>Namaz Times</h4>
        <ul>{post}</ul>
    </div>
};

export default NamazTimes