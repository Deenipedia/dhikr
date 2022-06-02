import Background from "./Background";
import Dhikr from "./Dhikr";
import SearchBox from "./SearchBox";
import Shortcuts from "./Shortcuts";


const SearchPanel = () => (
    <div className="mid-search">
        <Dhikr/>
        <SearchBox/>
        <Shortcuts/>
        <Background/>
    </div>
);


export default SearchPanel;
