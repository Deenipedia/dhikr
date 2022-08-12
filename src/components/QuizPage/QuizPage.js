import {useState, useEffect, default as React} from "react";
import QuizTimer from "../QuizTimer/QuizTimer";
import QuizBody from "../QuizBody/QuizBody";
import {QuizState, useForceUpdate} from "../../Utils";
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
    const forceUpdate = useForceUpdate();

    let timer;

    useEffect(() => {
        if (state === timerRunning) { 
            timer = setTimeout(() => setState(timerEnded), 5000);
        }
    }, [trigger]);

    const _setState = state => {
        if (timer) clearTimeout(timer);
        setState(state);
    }

    const _trigger = () => {
        _setState(timerRunning);
        trigger();
        forceUpdate();
    }

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
