import './App.css';
import Search from "../Search";
import Clock from "../Clock";
import Learning from "../Learning";

function App() {
    return (
        <div className="font-serif flex flex-row min-h-[100vh] justify-between pt-0 pb-0 pl-[10px] pr-[10px] max-w-[1920px] mt-0 mb-0 ml-auto mr-auto overflow-hidden">
            <Clock/>
            <Search/>
            <Learning/>
        </div>
    );
}


export default App;
