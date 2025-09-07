import React, { useState } from "react";
import MenuButton from "../../components/MenuButton";
import Skills from "../../components/Pages/About/Skills";
import AboutMe from "../../components/Pages/About/AboutMe";
import Education from "../../components/Pages/About/Education";
import Intership from "../../components/Pages/About/Intership"
import Projects from "../../components/Pages/About/Projects";
import { useMenuStore } from "../../store/useMenuStore";
import MyImage from "../../../public/assets/images/hazem.png";
import "./style.css";
import Button from "../../components/Button";
import { PATHS } from "../../constant/paths";
import HeadingSection from "../../components/HeadingSection";
import Career from "../../components/Pages/About/Career";

const tabs = [
  { key: "education", label: "Education", component: <Education /> },
  { key: "internShip", label: "Internship", component: <Intership /> },
  { key: "career", label: "Career", component: <Career /> },
  { key: "projects", label: "Projects", component: <Projects /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("career");
  const { isMenuOpen } = useMenuStore();

  return (
    <section className="style__section fade-in" id="about" name="aboutSection">
      <MenuButton />

      {!isMenuOpen && (
        <div className="about" id="about-container" name="aboutContainer">
          <HeadingSection title="About Me" />

          <div className="about__content" id="about-content" name="aboutContent">
            <div className="about__img" id="about-image-container" name="aboutImageContainer">
              <img 
                src={MyImage} 
                alt="Hazem" 
                id="about-profile-img"
                name="aboutProfileImage"
              />
            </div>

            <div className="about__info" id="about-info" name="aboutInfo">
              <AboutMe />
              <Skills />

              <div className="about__tabs" id="about-tabs" name="aboutTabs">
                {tabs.map(({ key, label }) => (
                  <button
                    key={key}
                    id={`tab-${key}`}
                    name={`tab${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    className={`tab__item ${activeTab === key ? "active" : ""}`}
                    onClick={() => setActiveTab(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div 
                className="content__container"
                id="tab-content-container"
                name="tabContentContainer"
              >
                {tabs.find((tab) => tab.key === activeTab)?.component}
              </div>

              <Button 
                stylee="btn__secondary" 
                navigateTo={PATHS.CONTACT.ROOT}
                id="contact-me-btn"
                name="contactMeButton"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
