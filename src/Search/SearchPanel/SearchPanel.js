import "./SearchPanel.css";
import Background from "../Background/Background";
import Dhikr from "../Dhikr/Dhikr";
import SearchBox from "../SearchBox/SearchBox";
import Shortcuts from "../Shortcuts/Shortcuts";

const SearchPanel = () => (
    <div className="SearchPanel">
        <Dhikr/>
        <SearchBox/>
        <Shortcuts/>
        <Background/>
    </div>
);


export default SearchPanel;
