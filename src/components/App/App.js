import './App.css';
import Clock from "../Clock/Clock";
import Hadith from "../Hadith/Hadith";
import SearchPanel from "../SearchPanel/SearchPanel";
import AnimatedClock from "../AnimatedClock/AnimatedClock";


function App() {
    return (
        <div className="App">
            <AnimatedClock/>
            <SearchPanel/>
            <Hadith/>
        </div>
    );
}


export default App;
