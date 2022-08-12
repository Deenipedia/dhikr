export const getFormattedTime = (hour, minute) => {
    minute = minute < 10 ? "0" + minute : minute;
    return hour > 12 ? (hour - 12) + ":" + minute : hour + ":" + minute;
};

export const QuizState = {
    hadith: Symbol("hadith"),
    timerRunning: Symbol("timerRunning"),
    timerEnded: Symbol("timerEnded"),
    correctlyAnswered: Symbol("correctlyAnswered"),
    incorrectlyAnswered: Symbol("incorrectlyAnswered")
};

