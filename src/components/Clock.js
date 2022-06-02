import CurrentTime from "./CurrentTime";
import NamazTimes from "./NamazTimes";


const Clock = () => (
    <div className="left-clock">
        <div className="left-clock-holder">
            <NamazTimes/>
            <CurrentTime/>
        </div>
    </div>
);


export default Clock;
