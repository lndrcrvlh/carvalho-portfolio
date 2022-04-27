import "./intro.css"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h1 class="intro-heading">I'm Leandro Carvalho</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">developer</div>
                            <div className="intro-title-item">father</div>
                            <div className="intro-title-item">product guy</div>
                            <div className="intro-title-item">linguist</div>
                            <div className="intro-title-item">traveler</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        I am a developer and I do things, and this should be a better description.
                    </div>
                </div>
            </div>
            <div className="intro-right">right</div>
        </div>
    );
};

export default Intro;