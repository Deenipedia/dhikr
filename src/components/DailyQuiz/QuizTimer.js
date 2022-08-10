import React from "react";
import "./QuizTimer.css"
function QuizTimer(){
    return(
        <div className= "quiz-header">
            <button className="skip-btn">Skip</button>
            <div className= "quiz-bar">
                <div className= "quiz-bar_progress">
                </div>
            </div>

        </div>
    )
}
export default QuizTimer