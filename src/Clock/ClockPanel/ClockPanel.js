import "./ClockPanel.css"
import ClockAnimation from "../ClockAnimation/ClockAnimation";
import NamazTimes from "../NamazTimes/NamazTimes";
import CurrentTime from "../CurrentTime/CurrentTime";

function ClockPanel(){
    return(
        <div className= "ClockPanel">
            <ClockAnimation/>
            <div className= "ClockHolder">
                <NamazTimes/>
                <CurrentTime/>
            </div>
        </div>
    )
}
export default ClockPanel

