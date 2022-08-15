import "./Hadith.css";
import {useEffect, useState} from "react";

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
            <div className="HadithContent">
                <div className="HadithContentText">
                    <div dangerouslySetInnerHTML={{__html: hadith}}/>
                </div>
                <h6 onClick={showQuiz}>Learn New Words</h6>
            </div>
        </div>
    )

};

export default Hadith;
