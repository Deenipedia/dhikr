import "./QuizOptions.css"
import {useState} from "react";
import {State} from "../Utils";

const yellow = '#ffd42a47';
const {timerRunning, correctlyAnswered, incorrectlyAnswered} = State;

function QuizOptions({correctAnswer, answers, state, setState}) {
    const [selected, setSelected] = useState();

    const setAnsweredState = answer => {
        setSelected(answer);
        if (answer === correctAnswer) setState(correctlyAnswered);
        else setState(incorrectlyAnswered);
    }

    const getBackgroundColor = answer => {
        if (state === timerRunning) return yellow;
        if (answer === correctAnswer) return '#17A963';
        if (answer === selected) return '#FF003D';
        return yellow;
    }

    return (
        <div className="quiz-options">
            {answers.map((ans, i) =>
                <button
                    key={ans + i}
                    style={{backgroundColor: getBackgroundColor(ans)}}
                    onClick={() => state === timerRunning && setAnsweredState(ans)}>
                    {ans}
                </button>
            )}
        </div>
    )
}

export default QuizOptions
