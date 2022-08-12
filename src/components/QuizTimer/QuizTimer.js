import React from "react";
import {QuizState} from "../../Utils";
import "./QuizTimer.css"

const timerRunningStyle = {animation: 'time-out linear 5s'};
const correctlyAnsweredStyle = { width: '100%', backgroundColor: '#17A963'};
const incorrectlyAnsweredStyle = { width: '100%', backgroundColor: '#a91751'};
const timerEndedStyle = { width: '100%', backgroundColor: '#ffd42a47'};

const {timerRunning, timerEnded, correctlyAnswered, incorrectlyAnswered} = QuizState;

const getStyle = state => {
    switch (state) {
        case timerRunning:
            return timerRunningStyle;
        case timerEnded:
            return timerEndedStyle;
        case correctlyAnswered:
            return correctlyAnsweredStyle;
        case incorrectlyAnswered:
            return incorrectlyAnsweredStyle;
    }
}

function QuizTimer({state, trigger}){
    const style = getStyle(state);

    return(
        <div className= "quiz-header">
            <button onClick={() => trigger()} className="skip-btn">
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
export default QuizTimer
