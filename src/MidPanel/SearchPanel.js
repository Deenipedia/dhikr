import Background from "./Background/Background";
import Dhikr from "./Dhikr";
import SearchBox from "./SearchBox";
import Shortcuts from "./Shortcuts";

const SearchPanel = () => (
    <div className="SearchPanel font-w[400px] w-[35vw] md:w-[40vw] my-0 mx-5 flex  flex-col items-center justify-center relative">
        <Dhikr/>
        <SearchBox/>
        <Shortcuts/>
        <Background/>
    </div>
);


export default SearchPanel;
