import React, {useState} from "react";
import {QuizState} from "../../Utils";
import "./QuizOptions.css"

const yellow = '#ffd42a47';
const {timerRunning, correctlyAnswered, incorrectlyAnswered} = QuizState;

function QuizOptions({correctAnswer, answers, state, setState}) {
    console.log(state);

    const [selected, setSelected] = useState();

    const setAnsweredState = answer => {
        setSelected(answer);
        if (answer === correctAnswer) setState(correctlyAnswered);
        else setState(incorrectlyAnswered);
    }

    const getBackgroundColor = answer => {
        if (state === timerRunning) return yellow;
        if (answer === correctAnswer) return 'green';
        if (answer === selected) return 'red'; 
        return yellow;
    }

    return (
        <div className="quiz-options">
            {answers.map((ans) =>
                <button
                    key={ans}
                    style={{backgroundColor: getBackgroundColor(ans)}}
                    onClick={() => state === timerRunning && setAnsweredState(ans)}>
                    {ans}
                </button>
            )}
        </div>
    )
}

export default QuizOptions