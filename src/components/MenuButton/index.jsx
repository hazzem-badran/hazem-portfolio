import React from "react";
import { useMenuStore } from "../../store/useMenuStore";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();
  return (
    <>
      <div className="menu__icon" onClick={toggleMenu}>
      {/* <FontAwesomeIcon icon="fa-light " /> */}
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faXmark} className="icon__color" />
        ) : (
          // <FontAwesomeIcon icon={faBars} className="icon__color" />
          <FontAwesomeIcon icon={faBars} className="icon__color" />
        )}
      </div>
      {isMenuOpen && (
        <div className="menu">
          <ul className="menu__ul" onClick={toggleMenu}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {/* <li>cradtiol</li> */}
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuButton;
