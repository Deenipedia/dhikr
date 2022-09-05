import "./ClockPanel.css"
import ClockAnimation from "../ClockAnimation/ClockAnimation";
import NamazTimes from "../NamazTimes/NamazTimes";
import CurrentTime from "../CurrentTime/CurrentTime";

function ClockPanel(){
    return(
        <div className="md:w-[25vw] w-[40vw] flex ml-2 justify-center max-h-screen relative top-0">
            <ClockAnimation/>
            <div className="ClockHolder flex h-full flex-row">
                <NamazTimes/>
                <CurrentTime/>
            </div>
        </div>
    )
}
export default ClockPanel

