import React from "react";
import "./QuizOptions.css"
function QuizOptions({answers}){
    console.log(answers)
    const correctAnswer = answers[0];
    const checkAnswer = (answer) => {
        if (answer === correctAnswer) alert("Kupaisos to");
        else alert("hala bekkol");
    }

    return(
        <div className= "quiz-options">
            {answers
                .sort( ()=>Math.random()-0.5 )
                .map(ans => <button onClick={() => checkAnswer(ans)}>{ans}</button>)}
        </div>
    )
}
export default QuizOptions