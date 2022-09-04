import {useHadith} from "../Utils";

const Hadith = ({showQuiz}) => {
    const hadith = useHadith();

    return hadith && (
        <div className=" flex-auto md:w-[35vw] w-[35vw] h-[100vh] sticky top-0 flex justify-center items-center">
            <div className=" border border-solid border-[#41B6BD] rounded-xl  h-[98%] flex justify-center items-center flex-col m-[0px]  py-[5px] px-[10px] absolute overflow-hidden bg-[rgba(134, 208, 173, 0.13)]">
                <div className="flex-auto mt-[10px] mr-0 mb-[5px] ml-[10px] overflow-y-auto">
                    <div dangerouslySetInnerHTML={{__html: hadith}}/>
                </div>
                <h6 className=" text-center text-base  py-[2px] px-[10px] border border-dashed border-[rgba(58, 70, 198, 0.24)] rounded-lg bg-[rgba(0, 255, 21, 0.08)] cursor-pointer my-[10px] mx-0" onClick={showQuiz}>Learn New Words</h6>
            </div>
        </div>
    )
};

export default Hadith;
