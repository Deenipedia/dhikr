import './ClockAnimation.css'

function  ClockAnimation(){
    return(
        <div>
            <div className="clock-anm-holder flex absolute top-0 -left-[1vw] right-0 bottom-0 justify-center items-center content-center">
                <svg className="progress" width="30%" height="100%" viewBox="0 0 1318 10912" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1268 10911.7V659.244C1268 659.244 1268 659.158 1268 659.116C1268 322.659 995.248 49.9062 658.791 49.9062C322.334 49.9062 49.582 322.659 49.582 659.116C49.582 995.573 322.334 1268.32 658.791 1268.32C986.729 1268.32 1254.47 1009.22 1267.8 684.555"
                        stroke="black"
                        strokeWidth="15"/>
                </svg>
                <svg className="min_anm absolute top-[1%] left-[45%] opacity-0" width="10%" height="10%" viewBox="0 0 723 6359" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M423.152 736.565C432.489 745.965 437.967 758.521 438.505 771.76L528.064 2972.64C529.285 3002.63 505.381 3027.65 475.367 3027.8L259.232 3028.85C229.218 3029 205.071 3004.22 205.998 2974.22L274.034 772.564C274.443 759.321 279.797 746.711 289.042 737.22L318.167 707.319C338.83 686.105 372.867 685.938 393.736 706.949L423.152 736.565Z"
                          fill="#FF0000"/>
                    <circle cx="361.531" cy="3179.19" r="285.195" transform="rotate(-0.280114 361.531 3179.19)" fill="#38789C"/>
                </svg>
                <svg className="hour_anm absolute top-[1%] left-[45%] opacity-0" width="10%" height="10%" viewBox="0 0 691 6356" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M402.405 1718.92C417.768 1727.79 427.67 1743.77 428.786 1761.48L504.952 2970.63C506.874 3001.16 482.638 3026.97 452.056 3026.97H238.944C208.362 3026.97 184.126 3001.15 186.048 2970.63L262.214 1761.48C263.33 1743.77 273.232 1727.79 288.595 1718.92L318.986 1701.36C335.391 1691.88 355.609 1691.88 372.014 1701.36L402.405 1718.92Z"
                          fill="#9C1C1C"/>
                </svg>
            </div>
            <div className="clock-anm-holder flex absolute top-0 -left-[1vw] right-0 bottom-0 justify-center items-center content-center">


                <svg className="progress" width="30%" height="100%" viewBox="0 0 1318 10912" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1268 10911.7V659.244C1268 659.244 1268 659.158 1268 659.116C1268 322.659 995.248 49.9062 658.791 49.9062C322.334 49.9062 49.582 322.659 49.582 659.116C49.582 995.573 322.334 1268.32 658.791 1268.32C986.729 1268.32 1254.47 1009.22 1267.8 684.555"
                        stroke="black"
                        strokeWidth="15"/>
                </svg>

                <svg className="min_anm absolute top-[1%] left-[45%] opacity-0" width="10%" height="10%" viewBox="0 0 723 6359" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M423.152 736.565C432.489 745.965 437.967 758.521 438.505 771.76L528.064 2972.64C529.285 3002.63 505.381 3027.65 475.367 3027.8L259.232 3028.85C229.218 3029 205.071 3004.22 205.998 2974.22L274.034 772.564C274.443 759.321 279.797 746.711 289.042 737.22L318.167 707.319C338.83 686.105 372.867 685.938 393.736 706.949L423.152 736.565Z"
                          fill="#FF0000"/>
                    <circle cx="361.531" cy="3179.19" r="285.195" transform="rotate(-0.280114 361.531 3179.19)" fill="#38789C"/>
                </svg>

                <svg className="hour_anm absolute top-[1%] left-[45%] opacity-0" width="10%" height="10%" viewBox="0 0 691 6356" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M402.405 1718.92C417.768 1727.79 427.67 1743.77 428.786 1761.48L504.952 2970.63C506.874 3001.16 482.638 3026.97 452.056 3026.97H238.944C208.362 3026.97 184.126 3001.15 186.048 2970.63L262.214 1761.48C263.33 1743.77 273.232 1727.79 288.595 1718.92L318.986 1701.36C335.391 1691.88 355.609 1691.88 372.014 1701.36L402.405 1718.92Z"
                          fill="#9C1C1C"/>
                </svg>
            </div>
        </div>

    )
}
export default ClockAnimation
