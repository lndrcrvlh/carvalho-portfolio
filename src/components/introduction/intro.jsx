import "./intro.css";

const Intro = () => {
  const qualities = [
    "developer",
    "father",
    "product guy",
    "linguist",
    "traveler",
    "camper",
    "nerd",
    "husband",
    "detail oriented",
  ];

  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h1 className="intro-heading">I'm Leandro Carvalho</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              {qualities.map((quality) => {
                return (
                  <div className="intro-title-item" key={quality}>
                    {quality}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="intro-description">
            A developer driven to make products that shine.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <div className="intro-img"></div>
      </div>
    </div>
  );
};

export default Intro;
