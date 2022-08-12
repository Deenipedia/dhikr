import {useState} from 'react';

export const getFormattedTime = (hour, minute) => {
    minute = minute < 10 ? "0" + minute : minute;
    return hour > 12 ? (hour - 12) + ":" + minute : hour + ":" + minute;
};

export const useForceUpdate = () => {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

export const QuizState = {
    hadith: Symbol("hadith"),
    timerRunning: Symbol("timerRunning"),
    timerEnded: Symbol("timerEnded"),
    correctlyAnswered: Symbol("correctlyAnswered"),
    incorrectlyAnswered: Symbol("incorrectlyAnswered")
};

