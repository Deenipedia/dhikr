import './App.css';
import Clock from "./components/Clock";
import Quiz from "./components/Quiz";
import SearchPanel from "./components/SearchPanel";


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
