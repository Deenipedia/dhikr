import "./ClockPanel.css"
import ClockAnimation from "../ClockAnimation/ClockAnimation";
import NamazTimes from "../NamazTimes/NamazTimes";
import CurrentTime from "../CurrentTime/CurrentTime";

function ClockPanel(){
    return(
        <div className= "ClockPanel flex flex-col justify-center max-h-screen sticky top-0">
            <ClockAnimation/>
            <div className= "ClockHolder flex h-full flex-row items-center justify-around">
                <NamazTimes/>
                <CurrentTime/>
            </div>
        </div>
    )
}
export default ClockPanel

