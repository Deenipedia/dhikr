import React, {useState} from "react";
import "./QuizOptions.css"

const yellow = '#ffd42a47';

function QuizOptions({correctAnswer, answers}) {
    const [selected, setSelected] = useState();

    const getBackgroundColor = answer => {
        if (!selected) return yellow;
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
                    onClick={() => setSelected(ans)}>
                    {ans}
                </button>
            )}
        </div>
    )
}

export default QuizOptions