 import "./SearchPanel.css";
import Background from "../Background/Background";
import Dhikr from "../Dhikr/Dhikr";
import SearchBox from "../SearchBox/SearchBox";
import Shortcuts from "../Shortcuts/Shortcuts";

const SearchPanel = () => (
    <div className="SearchPanel font-w[400px] w-[40vw] my-0 mx-5 flex  flex-col items-center justify-center relative">
        <Dhikr/>
        <SearchBox/>
        <Shortcuts/>
        <Background/>
    </div>
);


export default SearchPanel;
