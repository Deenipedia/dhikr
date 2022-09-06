import QuizOptions from "./QuizOptions";
import QuizHeader from "./QuizHeader/QuizHeader";
import {useQuiz, useStateTransition} from "./Utils";

function Quiz({showHadith}) {
    const [quiz, getNext] = useQuiz();
    const [state, setState] = useStateTransition();

    const next = () => setState(null) || getNext();

    if (!(state && quiz)) return <></>;

    return (
        <div className= "flex items-center justify-center flex-[25] w-[25vw] h-[100vh] sticky top-0">
            <div className= "flex flex-col items-center justify-center border-[1px] border-[#41B6BD] rounded-xl w-[35vw] h-[98vh]
                             m-[10px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] relative overflow-hidden bg-[#FFFFFF]">
                <QuizHeader {...{state, next}}/>
                <div className="w-[98%] pt-[15px] pb-[15px] pl-[8px] pr-[8px] absolute flex flex-col top-[85px] left-0 right-0 bottom-0 items-center justify-center overflow-y-auto overflow-x-hidden">
                    <div className="flex flex-auto justify-center flex-col max-h-[80vh]">
                        <h4 className=" font-semibold text-[#20AC69] text-2xl">{quiz.question}</h4>
                    </div>
                    <QuizOptions {...{...quiz, state, setState}} />
                    <h6 className="overflow-hidden text-center text-base w-fit py-[2px] px-[10px] border border-dashed border-[rgba(58, 70, 198, 0.24)] rounded-lg bg-[rgba(0, 255, 21, 0.08)] cursor-pointer my-[10px] mx-0" onClick={showHadith}>Read a Hadith</h6>
                </div>
            </div>
        </div>
    )
}

export default Quiz
