const NamazTimes = () => {
    let post = []
    let namazT = [5, 14, 16, 17, 20]
    for (let i = 0; i < 24; i++) post.push(<li></li>);
    let NNIndex = 0;

    let namazN = ["fazr", "dhuhr", "asr", "maghrib", "isha"]
    namazT.forEach(it => {
        post[it - 1] = <li><b>{namazN[NNIndex]}</b> {it > 12 ? (it - 12) + ":00" : it + ":00"}
            <apm>{it > 12 ? "pm" : "am"}</apm>
        </li>;

        NNIndex++;
    });

    return <div className="ll-clock-holder"><h4>Namaz Times</h4>
        <ul>{post}</ul>
    </div>
};

export default NamazTimes