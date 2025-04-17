import React from "react";
import { useMenuStore } from "../../store/useMenuStore";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();

  const handleLinkClick = () => {
    setTimeout(toggleMenu, 100);
  };
  return (
    <>
      <div className="menu__icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faXmark} className="icon__color" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="icon__color" />
        )}
      </div>
      {isMenuOpen && (
        <div className="menu">
          <ul className="menu__ul">
            <li>
              <Link to={"/"} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuButton;
