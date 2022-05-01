import "./intro.css"
import lc from "../../images/lc-2.png"

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
                    <p className="intro-description">
                        I am a developer and I do things, and this should be a better description.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={lc} alt="Leandro Carvalho" className="intro-img" />
            </div>
        </div>
    );
};

export default Intro;