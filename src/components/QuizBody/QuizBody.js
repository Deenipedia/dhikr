import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import "./QuizBody.css"

function QuizBody({showHadith, quiz, state, setState}) {
   return (
        <div className="quiz-Body">
            <div className="quiz-question">
                <h4>{quiz.question}</h4>
            </div>
            <QuizOptions {...{...quiz, state, setState}} />
            <h6 onClick={showHadith}>Read Hadith</h6>
        </div>
    )
}

export default QuizBody
