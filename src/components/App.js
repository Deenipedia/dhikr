import './App.css';
import Clock from "./Clock";
import Quiz from "./Quiz";
import SearchPanel from "./SearchPanel";


function App() {
    return (
        <div className="main">
            <Clock/>
            <SearchPanel/>
            <Quiz/>
        </div>
    );
}


export default App;
