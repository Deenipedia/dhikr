import CurrentTime from "../CurrentTime/CurrentTime";
import NamazTimes from "../NamazTimes/NamazTimes";
import "./Clock.css"


const Clock = () => (
    <div className="Clock">
        <div className="Clock-left-holder">
            <NamazTimes/>
            <CurrentTime/>
        </div>
    </div>
);


export default Clock;
