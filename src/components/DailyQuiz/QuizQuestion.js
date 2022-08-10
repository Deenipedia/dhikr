import React from "react";
import "./QuizQuestion.css"
function QuizQuestion({question}){
    return(
        <div className="quiz-question">
            <h4>{question}</h4>
        </div>
    )
}

export default QuizQuestion