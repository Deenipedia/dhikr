import {useEffect, useRef, useState} from "react";

const time = process.env.REACT_APP_QUIZ_TIME;

export const State = {
    timerRunning: Symbol("timerRunning"),
    timerEnded: Symbol("timerEnded"),
    correctlyAnswered: Symbol("correctlyAnswered"),
    incorrectlyAnswered: Symbol("incorrectlyAnswered")
};

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getQuiz = data => {
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

export const getTimerStyle = state => {
    switch (state) {
        case State.timerRunning:
            return {animation: `time-out linear ${time}s`};
        case State.correctlyAnswered:
            return {width: '100%', backgroundColor: '#17A963'};
        default:
            return {width: '100%', backgroundColor: '#a91751'};
    }
}

export const useQuiz = () => {
    const [data, setData] = useState([]);
    const quiz = useRef(null);

    useEffect(() => {
        fetch("/data/words.json")
            .then(res => res.json())
            .then(data => {
                setData(data);
                quiz.current = getQuiz(data);
            })
    }, []);

    const getNext = () => quiz.current = getQuiz(data);

    return [quiz.current, getNext];
}

export const useHadith = () => {
    const [hadith, setHadith] = useState([]);
    useEffect(() => {
        fetch("/data/hadith.json")
            .then(res => res.json())
            .then(list => {
                const listLength = Object.keys(list).length - 1;
                return list[Math.floor(Math.random() * listLength)]
            })
            .then(setHadith)

    }, []);
    return hadith;
};

export const useStateTransition = () => {
    const [state, setState] = useState(State.timerRunning);

    useEffect(() => {
        if (!state) {
            const timer = setTimeout(() => setState(State.timerRunning), 1);
            return () => clearTimeout(timer);
        }
        if (state === State.timerRunning) {
            const timer = setTimeout(() => setState(State.timerEnded), time * 1000);
            return () => clearTimeout(timer);
        }
    }, [state]);

    return [state, setState];
}

