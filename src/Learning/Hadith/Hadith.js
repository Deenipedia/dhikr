import "./Hadith.css";
import {useHadith} from "../Utils";

const Hadith = ({showQuiz}) => {
    const hadith = useHadith();

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
