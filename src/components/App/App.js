import './App.css';
import SearchPanel from "../SearchPanel/SearchPanel";
import AnimatedClock from "../AnimatedClock/AnimatedClock";
import QuizPage from "../DailyQuiz/QuizPage";


function App() {
    return (
        <div className="App">
            <AnimatedClock/>
            <SearchPanel/>
            {/*<Hadith/>*/}
            <QuizPage/>

        </div>
    );
}


export default App;
