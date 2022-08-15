import React from "react";
import {QuizState} from "../../Utils";
import "./QuizHeader.css"

const {timerRunning, correctlyAnswered} = QuizState;
const time = process.env.REACT_APP_QUIZ_TIME;

const getStyle = state => {
    switch (state) {
        case timerRunning:
            return {animation: `time-out linear ${time}s`};
        case correctlyAnswered:
            return {width: '100%', backgroundColor: '#17A963'};
        default:
            return {width: '100%', backgroundColor: '#a91751'};
    }
}

function QuizHeader({state, trigger}){
    const style = getStyle(state);

    return(
        <div className= "QuizHeader">
            <button onClick={trigger} className="skip-btn">
                {state === timerRunning ? "Skip" : "Next"}
            </button>
            <div className= "quiz-bar">
                <div 
                    className= "quiz-bar_progress" 
                    style={style}
                />
            </div>
        </div>
    )
}
export default QuizHeader
