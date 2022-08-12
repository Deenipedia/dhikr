import {useState, useEffect, useRef, default as React} from "react";
import QuizTimer from "../QuizTimer/QuizTimer";
import QuizBody from "../QuizBody/QuizBody";
import {QuizState} from "../../Utils";
import "./QuizPage.css"

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getQuiz = data => {
    const questionIndex = getRandomNum(0, 1);
    const answerIndex = +!questionIndex;

    const randSet = new Set();
    while (randSet.size < 4) {
        randSet.add(getRandomNum(0, 199));
    }
    const randNumArray = Array.from(randSet);
    const randElem = randNumArray.map(i => data.at(i))[0];
    const sortedElems = randNumArray.sort().map(i => data.at(i));
    return {
        question: randElem[questionIndex], 
        correctAnswer: randElem[answerIndex],
        answers: sortedElems.map(elem => elem[answerIndex])
    };
};

const Quiz = ({quiz, showHadith, trigger}) => {
    const {timerRunning, timerEnded} = QuizState;

    const [state, setState] = useState(timerRunning);
    const timer = useRef();

    useEffect(() => {
        if (!state)
            timer.current = setTimeout(() => setState(timerRunning), 1);
        if (state === timerRunning) 
            timer.current = setTimeout(() => setState(timerEnded), 5000);
    }, [state]);

    const _setState = newState => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
        if (state === timerRunning && newState === state) setState();
        else setState(newState); 
    }

    const _trigger = () => {
        _setState(timerRunning);
        trigger();
    }

    if (!state) return <></>;

    return (
        <div className= "right-quiz">
            <div className= "rq-content">
                <QuizTimer 
                    state={state} 
                    trigger={_trigger} 
                />
                <QuizBody {...{quiz, showHadith, state, setState: _setState}} />
            </div>
        </div>
    );
}

function QuizPage({showHadith}){
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState(false);
    
    useEffect(() => {
        fetch("/words.json")
            .then(res => res.json())
            .then(setData)
    }, []);

    return data.length ? 
        <Quiz 
            trigger={() => setTrigger(!trigger)}
            quiz={getQuiz(data)} 
            showHadith={showHadith} 
        /> : 
        <></>;
}
export default QuizPage
