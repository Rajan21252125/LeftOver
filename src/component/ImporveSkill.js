export default function ImporveSkill() {
    const list = [
        "Learn new recipes",
        "Learn new techniques",
        "Learn new ingredients",
        "Learn new cooking styles",
        "Experiment with your food",
        "Learn how to cook for a crowd"
    ]
    return (
        <div className="section improveSkill">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt=""></img>
            </div>
            <div className="col typography">
                <h1 className="title">
                    Improve your Culinary skills
                </h1>
                { list.map((item, index) =>(
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">
                    Signup Now
                </button>
            </div>
        </div>
    )
}
