import React from "react";
import Clock from "../Clock/Clock";
import CircleAnimation from "../CircleAnimation/CircleAnimation";
import "./AnimatedClock.css"
function AnimatedClock(){
    return(
        <div className= "left-clock">
            <CircleAnimation/>
            <Clock/>
        </div>
    )
}
export default AnimatedClock

