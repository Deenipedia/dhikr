import {useState, useEffect} from "react";
import QuizBody from "../QuizBody/QuizBody";
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

function QuizPage({showHadith}){
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState(false);
    
    useEffect(() => {
        fetch("/words.json")
            .then(res => res.json())
            .then(setData)
    }, []);

    return data.length ? 
        <QuizBody
            trigger={() => setTrigger(!trigger)}
            quiz={getQuiz(data)} 
            showHadith={showHadith} 
        /> : 
        <></>;
}
export default QuizPage
