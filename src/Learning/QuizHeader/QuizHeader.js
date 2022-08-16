import "./QuizHeader.css"
import {getTimerStyle, State} from "../Utils";

function QuizHeader({state, next}){
    const style = getTimerStyle(state);

    return(
        <div className= "QuizHeader">
            <button onClick={next} className="skip-btn">
                {state === State.timerRunning ? "Skip" : "Next"}
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
