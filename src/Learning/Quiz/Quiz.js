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
                    <div className="QuizQuestion">
                        <h4>{quiz.question}</h4>
                    </div>
                    <QuizOptions {...{...quiz, state, setState}} />
                    <h6 onClick={showHadith}>Read a Hadith</h6>
                </div>
            </div>
        </div>
    )
}

export default Quiz
