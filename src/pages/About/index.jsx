import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "../../components/MenuButton";
// import HeadingSection from "../../components/HeadingSection";
// import Skills from "../../components/Skills";
import Skills from "../../components/Pages/About/Skills";
import AboutMe from "../../components/Pages/About/AboutMe";
import Education from "../../components/Pages/About/Education";
// import Intership from "../../components/Pages/About/InterShip";
import Intership from "../../components/Pages/About/Intership"
import Projects from "../../components/Pages/About/Projects";
import { useMenuStore } from "../../store/useMenuStore";
import MyImage from "../../assets/images/hazem.png";
import "./style.css";
import Button from "../../components/Button";
import { PATHS } from "../../constant/paths";
import HeadingSection from "../../components/HeadingSection";

const tabs = [
  { key: "education", label: "Education", component: <Education /> },
  { key: "internShip", label: "Internship", component: <Intership /> },
  { key: "projects", label: "Projects", component: <Projects /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const { isMenuOpen } = useMenuStore();

  return (
    <section className="style__section fade-in" id="about">
      <MenuButton />

      {!isMenuOpen && (
        <div className="about">
          <HeadingSection title="About Me" />

          <div className="about__content">
            <div className="about__img">
              <img src={MyImage} alt="Hazem" />
            </div>

            <div className="about__info">
              <AboutMe />
              <Skills />

              <div className="about__tabs">
                {tabs.map(({ key, label }) => (
                  <button
                    key={key}
                    className={`tab__item ${activeTab === key ? "active" : ""}`}
                    onClick={() => setActiveTab(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="content__container">
                {tabs.find((tab) => tab.key === activeTab)?.component}
              </div>

              <Button stylee="btn__secondary" navigateTo={PATHS.CONTACT.ROOT}>
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
