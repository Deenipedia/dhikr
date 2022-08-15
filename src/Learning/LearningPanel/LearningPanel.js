import Hadith from "../Hadith/Hadith";
import Quiz from "../Quiz/Quiz";
import {useLocalStorage} from "../../Utils";

function LearningPanel() {
    const [showHadith, setShowHadith] = useLocalStorage('showHadith', true);
    const toggle = () => setShowHadith(!showHadith);

    return showHadith ?
        <Hadith showQuiz={toggle}/> :
        <Quiz showHadith={toggle}/>;
}


export default LearningPanel;
