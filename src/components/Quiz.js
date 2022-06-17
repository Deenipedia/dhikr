import {useEffect, useState} from "react";

const URL = "https://raw.githubusercontent.com/NHSanto/dhikr/main/public/hadith.json";

const Quiz = () => {
    const [hadith, setHadith] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(list => {
                const listLength=Object.keys(list).length-1;
                return list[Math.floor(Math.random() * listLength)]
            })
            .then(setHadith)

    }, []);

    function randomHadith() {
        return {
            __html: hadith   };
    }
    return hadith &&(
        <div className="right-quiz">
            <div className="rq-content">
                <div className="rq-content-text">

                    <div dangerouslySetInnerHTML={randomHadith()} />
                </div>
                <h6>Learn New Words</h6>
            </div>
        </div>
    )

};

export default Quiz;
