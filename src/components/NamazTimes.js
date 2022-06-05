import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import logo from './logo.svg';
function App() {
    let namazT=[];
    const [data ,setData]=useState({});
    const location = {
        latitute:'23',
        longitute:'90'
    };

   // const url =`https://jsonplaceholder.typicode.com/users`
    const url =`http://api.aladhan.com/v1/timings/1398332113?latitude=${location.latitute}&longitude=${location.longitute}&method=2`
    useEffect( ()=>{
        async function getNamajTime()
        {
            const result=await axios(url);
            //namazT=Object.values(result.data.timings);
            setData(result.data);
            //setData(result.data);

        };

         getNamajTime();
    },[])
    let tmp={};

    tmp={
        ...data.data?.timings
    };
    namazT=Object.values(tmp);
    console.log(namazT);



  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
