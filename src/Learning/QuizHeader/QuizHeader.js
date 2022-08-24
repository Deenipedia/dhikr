import "./QuizHeader.css"
import {getTimerStyle, State} from "../Utils";

function QuizHeader({state, next}){
    const style = getTimerStyle(state);

    return(
        <div className= "QuizHeader w-[99%] border-none border-[2px] border-[#1C1C1C] py-[10px] px-[8px] flex absolute top-0 left-0 right-0 min-h-[50px]">
            <button onClick={next} className="skip-btn absolute top-[45%] -translate-y-[50%] right-0 w-fit rounded-r-[20px] rounded-l-[6px] shadow-none bg-[#BA8C57] border-none py-[6px] px-[14px] flex-auto m-1 text-[20px] text-[#FFFFFF]">
                {state === State.timerRunning ? "Skip" : "Next"}
            </button>
            <div className= "quiz-bar absolute -bottom-[10px] left-[2px] w-[99%] h-[5px] bg-[#0000001C] rounded">
                <div 
                    className= "quiz-bar_progress absolute bottom-0 left-0 h-[5px] rounded" 
                    style={style}
                />
            </div>
        </div>
    )
}
export default QuizHeader
