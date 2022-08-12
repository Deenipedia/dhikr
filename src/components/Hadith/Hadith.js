import {useEffect, useState} from "react";
import "./Hadith.css";

const Hadith = ({showQuiz}) => {
    const [hadith, setHadith] = useState([]);
    useEffect(() => {
        fetch("/hadith.json")
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
                <h6 onClick={showQuiz}>Learn New Words</h6>
            </div>
        </div>
    )

};

export default Hadith;
