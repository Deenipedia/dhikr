import "./Quiz.css"
import QuizOptions from "../QuizOptions/QuizOptions";
import QuizHeader from "../QuizHeader/QuizHeader";
import {useQuiz, useStateTransition} from "../Utils";

function Quiz({showHadith}) {
    const [quiz, getNext] = useQuiz();
    const [state, setState] = useStateTransition();

    const next = () => setState(null) || getNext();

    if (!(state && quiz)) return <></>;

    return (
        <div className= "Quiz">
            <div className= "QuizContent">
                <QuizHeader {...{state, next}}/>
                <div className="QuizBody">
                    <div className="QuizQuestion flex flex-auto justify-center flex-col max-h-[250px]">
                        <h4 className=" font-semibold text-[#20AC69] text-2xl">{quiz.question}</h4>
                    </div>
                    <QuizOptions {...{...quiz, state, setState}} />
                    <h6 className=" text-center text-base max-w-[99%] py-[2px] px-[10px] border border-dashed border-[rgba(58, 70, 198, 0.24)] rounded-lg bg-[rgba(0, 255, 21, 0.08)] cursor-pointer my-[10px] mx-0" onClick={showHadith}>Read a Hadith</h6>
                </div>
            </div>
        </div>
    )
}

export default Quiz
