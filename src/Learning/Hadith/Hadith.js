import "./Hadith.css";
import {useHadith} from "../Utils";

const Hadith = ({showQuiz}) => {
    const hadith = useHadith();

    return hadith && (
        <div className="Hadith flex-auto max-w-[450px] h-[100vh] sticky top-0 flex justify-center items-center">
            <div className="HadithContent border border-solid border-[#41B6BD] rounded-xl w-[98%] h-[98%] flex justify-center items-center flex-col m-[10px] min-w-[250px] py-[5px] px-[10px] relative overflow-hidden bg-[rgba(134, 208, 173, 0.13)]">
                <div className="HadithContentText flex-auto mt-[10px] mr-0 mb-[5px] ml-[10px] overflow-y-auto">
                    <div dangerouslySetInnerHTML={{__html: hadith}}/>
                </div>
                <h6 className=" text-center text-base max-w-[99%] py-[2px] px-[10px] border border-dashed border-[rgba(58, 70, 198, 0.24)] rounded-lg bg-[rgba(0, 255, 21, 0.08)] cursor-pointer my-[10px] mx-0" onClick={showQuiz}>Learn New Words</h6>
            </div>
        </div>
    )
};

export default Hadith;
