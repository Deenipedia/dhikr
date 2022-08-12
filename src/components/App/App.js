import {useState} from 'react';
import './App.css';
import SearchPanel from "../SearchPanel/SearchPanel";
import AnimatedClock from "../AnimatedClock/AnimatedClock";
import Hadith from "../Hadith/Hadith";
import QuizPage from "../QuizPage/QuizPage";

function App() {
   const [showHadith, setShowHadith] = useState(true);
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
