// import "./SearchBox.css";
import { useState } from "react";
import { chrome } from "../../Utils";

const HTTP_REGEX = new RegExp(
  "http(s)?://([a-z|0-9].*)[a-z|0-9]\\.[a-z|0-9]+.*"
);
const NON_HTTP_REGEX = new RegExp("([a-z|0-9]*\\.*)[a-z|0-9]\\.[a-z|0-9]+.*");

const SearchBox = () => {
  const [value, setValue] = useState("");

  const goToUrl = () => {
    if (value.match(HTTP_REGEX)) {
      chrome.tabs.update({ url: value });
    } else if (value.match(NON_HTTP_REGEX)) {
      chrome.tabs.update({ url: "http://" + value });
    } else {
      chrome.tabs.update({
        url: "https://google.com/search?q=" + encodeURI(value),
      });
    }
  };


  return (
    <>
  
<div className="flex-col items-center justify-center bg-white pt-5">
  
  <div className="md:w-[450px] mx-auto mt-0 flex w-[92%] items-center rounded-full border hover:shadow-md">


    <div className="pl-5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <input type="text" className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
    autoFocus={true}
    value={value}
    placeholder="Search Google or Type a URL"
    onInput={event => setValue(event.target.value)}
    onKeyUp={({code}) => code === 'Enter' && goToUrl()}/>
    

  </div>
 
</div>



    </>
  );
};
export default SearchBox;
