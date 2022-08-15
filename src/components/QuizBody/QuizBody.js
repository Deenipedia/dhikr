import QuizOptions from "../QuizOptions/QuizOptions";
import "./QuizBody.css"
import {useEffect, useState} from "react";
import QuizTimer from "../QuizTimer/QuizTimer";
import {QuizState} from "../../Utils";

function QuizBody({quiz, showHadith, trigger}) {
    const {timerRunning, timerEnded} = QuizState;

    const [state, setState] = useState(timerRunning);

    useEffect(() => {
        if (!state) {
            const timer = setTimeout(() => setState(timerRunning), 1);
            return () => clearTimeout(timer);
        }
        if (state === timerRunning) {
            const timer = setTimeout(() => setState(timerEnded), 5000);
            return () => clearTimeout(timer);
        }
    }, [state]);

    const _setState = newState => {
        if (state === timerRunning && newState === state) setState();
        else setState(newState);
    }

    const _trigger = () => {
        _setState(timerRunning);
        trigger();
    }

    if (!state) return <></>;

    return (
        <div className= "right-quiz">
            <div className= "rq-content">
                <QuizTimer
                    state={state}
                    trigger={_trigger}
                />
                <div className="quiz-Body">
                    <div className="quiz-question">
                        <h4>{quiz.question}</h4>
                    </div>
                    <QuizOptions {...{...quiz, state, setState}} />
                    <h6 onClick={showHadith}>Read Hadith</h6>
                </div>
            </div>
        </div>
    )
}

export default QuizBody
