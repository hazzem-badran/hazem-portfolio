import React from "react";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";
import { useMenuStore } from "../../store/useMenuStore";
import "./style.css";
import { Link } from "react-router-dom";

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();
  return (
    <>
      <div className="menu__icon" onClick={toggleMenu}>
        <img
          src={isMenuOpen ? close : menu}
          alt="menu"
          width={40}
          height={40}
        />
      </div>
      {isMenuOpen && (
        <div className="menu">
          <ul className="menu__ul" onClick={toggleMenu}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            {/* <li>cradtiol</li> */}
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuButton;
