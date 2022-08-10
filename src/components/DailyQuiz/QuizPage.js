import React from "react";
import QuizTimer from "./QuizTimer";
import QuizBody from "./QuizBody";
import "./QuizPage.css"
function QuizPage(){
    return(
        <div className= "right-quiz">
            <div className= "rq-content">
                <QuizTimer/>
                <QuizBody/>
            </div>
        </div>
    )
}
export default QuizPage