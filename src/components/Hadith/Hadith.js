import {useEffect, useState} from "react";
import "./Hadith.css";

const URL = "https://raw.githubusercontent.com/NHSanto/dhikr/main/public/hadith.json";

const Hadith = () => {
    const [hadith, setHadith] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(list => {
                const listLength = Object.keys(list).length - 1;
                return list[Math.floor(Math.random() * listLength)]
            })
            .then(setHadith)

    }, []);

    return hadith && (
        <div className="Hadith">
            <div className="Hadith-right-content">
                <div className="Hadith-right-content-text">
                    <div dangerouslySetInnerHTML={{__html: hadith}}/>
                </div>
                <h6>Learn New Words</h6>
            </div>
        </div>
    )

};

export default Hadith;
