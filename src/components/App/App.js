import {useEffect, useState} from 'react';
import './App.css';
import SearchPanel from "../SearchPanel/SearchPanel";
import AnimatedClock from "../AnimatedClock/AnimatedClock";
import Hadith from "../Hadith/Hadith";
import QuizPage from "../QuizPage/QuizPage";
const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};


function App() {
   const [showHadith, setShowHadith] = useLocalStorage('showHadith', true);



   return (
        <div className="App">
            <AnimatedClock/>
            <SearchPanel/> 
            {showHadith ? 
                <Hadith showQuiz={() => setShowHadith(false)} /> : 
                <QuizPage showHadith={() => setShowHadith(true)} />
            }
        </div>
    );
}


export default App;
