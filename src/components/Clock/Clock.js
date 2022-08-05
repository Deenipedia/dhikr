import React from "react";
import CurrentTime from "../CurrentTime/CurrentTime";
import NamazTimes from "../NamazTimes/NamazTimes";
import "./Clock.css"
function Clock(){
    return(
        <div className= "left-clock-holder">
                    <NamazTimes/>
                    <CurrentTime/>
        </div>
    )
}
export default Clock