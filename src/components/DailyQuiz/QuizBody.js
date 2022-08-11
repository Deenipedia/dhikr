import {useState, useEffect, React} from "react";
import QuizOptions from "./QuizOptions";
import "./QuizBody.css"

const URL = "https://raw.githubusercontent.com/NHSanto/dhikr/main/public/words.json";

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

function QuizBody() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(setData)
    }, []);

    if (!data.length) return <></>;

    const quiz = getQuiz(data);

    return (
        <div className="quiz-Body">
            <div className="quiz-question">
                <h4>{quiz.question}</h4>
            </div>
            <QuizOptions {...quiz} />
        </div>
    )
}

export default QuizBody
