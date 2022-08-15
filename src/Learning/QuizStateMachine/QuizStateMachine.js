import "./QuizStateMachine.css"
import QuizOptions from "../QuizOptions/QuizOptions";
import {useEffect, useState} from "react";
import QuizHeader from "../QuizHeader/QuizHeader";
import {QuizState} from "../../Utils";

const {timerRunning, timerEnded} = QuizState;
const quizTime = process.env.REACT_APP_QUIZ_TIME * 1000;

function QuizStateMachine({quiz, showHadith, trigger}) {
    const [state, setState] = useState(timerRunning);

    useEffect(() => {
        if (!state) {
            const timer = setTimeout(() => setState(timerRunning), 1);
            return () => clearTimeout(timer);
        }
        if (state === timerRunning) {
            const timer = setTimeout(() => setState(timerEnded), quizTime);
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
        <div className= "Quiz">
            <div className= "rq-content">
                <QuizHeader
                    state={state}
                    trigger={_trigger}
                />
                <div className="quiz-Body">
                    <div className="quiz-question">
                        <h4>{quiz.question}</h4>
                    </div>
                    <QuizOptions {...{...quiz, state, setState}} />
                    <h6 onClick={showHadith}>Read a Hadith</h6>
                </div>
            </div>
        </div>
    )
}

export default QuizStateMachine
