import "./SearchPanel.css";
import Background from "../Background/Background";
import Dhikr from "../Dhikr/Dhikr";
import SearchBox from "../SearchBox/SearchBox";
import Shortcuts from "../Shortcuts/Shortcuts";

const SearchPanel = () => (
    <div className="SearchPanel my-0 mx-5 flex flex-auto flex-col items-center justify-center relative max-w-[450px]">
        <Dhikr/>
        <SearchBox/>
        <Shortcuts/>
        <Background/>
    </div>
);


export default SearchPanel;
