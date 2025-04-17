import React from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import MyImage from "../../assets/images/hazem.png";
import MenuButton from "../../components/MenuButton";
import { useMenuStore } from "../../store/useMenuStore";
import { PATHS } from "../../constant/paths";
import Button from "../../components/Button";

const Home = () => {
  const { isMenuOpen } = useMenuStore();
  return (
    <section className="style__section fade-in" id="home">
      <MenuButton />
      {!isMenuOpen && (
        <div className="home__info">
          <div className="home__info__text">
            <p>👋 Hello, I'm</p>
            <h1>Hazem Badran</h1>
            <h2>React.js & React Native Specialist | Tech Content Creator.</h2>

            <Button stylee="btn__secondary" navigateTo={PATHS.ABOUT.ROOT}>
              More About Me
            </Button>
          </div>
          <div className="home__info__img">
            <div className="img__box">
              <img src={MyImage} alt="profile-img" />
            </div>
          </div>
        </div>
      )}

      {/* </div> */}
    </section>
  );
};

export default Home;
