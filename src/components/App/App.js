import './App.css';
import Clock from "../Clock/Clock";
import Hadith from "../Hadith/Hadith";
import SearchPanel from "../SearchPanel/SearchPanel";


function App() {
    return (
        <div className="App">
            <Clock/>
            <SearchPanel/>
            <Hadith/>
        </div>
    );
}


export default App;
