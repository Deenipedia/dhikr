import {useState} from "react";
import {State} from "../Utils";

const yellow = '#ffd42a47';
const {timerRunning, correctlyAnswered, incorrectlyAnswered} = State;

function QuizOptions({correctAnswer, answers, state, setState}) {
    const [selected, setSelected] = useState();

    const setAnsweredState = answer => {
        setSelected(answer);
        if (answer === correctAnswer) setState(correctlyAnswered);
        else setState(incorrectlyAnswered);
    }

    const getBackgroundColor = answer => {
        if (state === timerRunning) return yellow;
        if (answer === correctAnswer) return '#17A963';
        if (answer === selected) return '#FF003D';
        return yellow;
    }

    return (
        <div className="quiz-options border-none border-2 border-[#1C1C1C] py-1 px-2 w-full min-h-[100px] mt-[20px] flex flex-row flex-wrap justify-between items-stretch ">
            {answers.map((ans, i) =>
                <button
                    className=" rounded-md shadow-none bg-[#FFD42A47] border-none py-[10px] px-[50px] flex-auto m-1 hover:shadow-md shadow-[#72675F]"
                    key={ans + i}
                    style={{backgroundColor: getBackgroundColor(ans)}}
                    onClick={() => state === timerRunning && setAnsweredState(ans)}>
                    {ans}
                </button>
            )}
        </div>
    )
}

export default QuizOptions
