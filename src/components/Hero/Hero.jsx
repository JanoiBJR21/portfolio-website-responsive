import React from "react";
import "./Hero.css";
import logo_react from "../../assets/images/logo_react.png";
import logo_hero from "../../assets/images/logo_hero.png";
import logo_html from "../../assets/images/logo_html.png";
import logo_css from "../../assets/images/logo_css.png";
import javascript from "../../assets/images/javascript.png";
import tailwind_css from "../../assets/images/tailwind_css.png";
import logo_github from "../../assets/images/logo_github.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas onto Seamless and
          Visually Stunning Web Solution
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={logo_react} alt="" />
          </div>
            <img src={logo_hero} alt="" />
        </div>
        <div>
            <div className="tech-icon">
                <img src={logo_html} alt="" />
            </div>
            <div className="tech-icon">
                <img src={logo_css} alt="" />
            </div>
            <div className="tech-icon">
                <img src={javascript} alt="" />
            </div>
            <div className="tech-icon">
                <img src={tailwind_css} alt="" />
            </div>
            <div className="tech-icon">
                <img src={logo_github} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
