import React from "react";
import "./about.css";
import IMAGES from "../../images/logos/redirectImages";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-skills">
          <div className="about-skills-wrapper">
            <img src={IMAGES.git} alt="git" className="skill-logo" />
            <img src={IMAGES.rust} alt="Rust" className="skill-logo" />
            <img src={IMAGES.nodeJS} alt="NodeJS" className="skill-logo" />
            <img src={IMAGES.CSS} alt="CSS" className="skill-logo" />

            <img src={IMAGES.react} alt="React" className="skill-logo" />
            <img src={IMAGES.html} alt="HTML" className="skill-logo" />
            <img
              src={IMAGES.javascript}
              alt="javascript"
              className="skill-logo"
            />
            <img src={IMAGES.mongoDB} alt="mongoDB" className="skill-logo" />
            <img
              src={IMAGES.wordpress}
              alt="WordPress"
              className="skill-logo"
            />
            <img src={IMAGES.mysql} alt="mySQL" className="skill-logo" />
            <img src={IMAGES.php} alt="PHP" className="skill-logo" />
            <img
              src={IMAGES.ubuntu}
              alt="Ubuntu/Linux"
              className="skill-logo"
            />
            <img src={IMAGES.GIMP} alt="GIMP" className="skill-logo" />
            <img src={IMAGES.Canva} alt="canva" className="skill-logo" />
            <img
              src={IMAGES.Elementor}
              alt="Elementor"
              className="skill-logo"
            />
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-heading">Developer with Product Vision</div>
        <div className="about-bio">
          <p className="about-bio-paragraph">
            I love the process of programming - one my favorite part usually
            comes in at the very beginning. I trace through the various aspects
            of the project and try to break things down into pieces as small as
            possible. Sometimes this is just a mental map, sometimes I like to
            physically write things out.
          </p>
          <p className="about-bio-paragraph">
            I think this comes from the early days when I started to learn how
            to program, I spent a lot of time pair programming and bug testing
            and eventually became an Associate Product Manager. I became very
            detail oriented.
          </p>
          <p className="about-bio-paragraph">
            I flat out love to build things - woodworking projects, legos, model
            kits - I think my approach to each of them is very similar. I lay
            out the tools available and trace out the steps to get there,
            sometimes life is nice and I get an instruction kit, sometimes I
            have to figure things out on my own.
          </p>
          <p className="about-bio-paragraph">
            I love learning languages - I've studied Japanese, Russian, French,
            Spanish, and Chinese, but I'd only call myself fluent in Japanese.
            I'm a bilingual Portuguese and English speaker.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
