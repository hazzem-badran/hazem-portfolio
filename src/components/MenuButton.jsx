import React from "react";
import { useMenuStore } from "../store/useMenuStore";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {LINKS } from "../constant/links"

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();

  const handleLinkClick = () => {
    setTimeout(toggleMenu, 100);
  };
  return (
    <>
      <div
        className="absolute right-12 top-5 w-10 h-10 cursor-pointer rounded-full bg-[#E8F9FF] border border-white flex items-center justify-center z-10 transition-opacity duration-500"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="text-primary w-6 h-6 text-[#e02f6b]"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="text-primary w-6 h-6 text-[#e02f6b]"
          />
        )}
      </div>
      {isMenuOpen && (
        <div className="w-full h-full  flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center gap-6">
          {LINKS.map((item) => (
              <li
                key={item.to}
                className="text-3xl font-medium transition-all duration-300 hover:text-[#e02f6b] hover:scale-150 hover:shadow-md"
              >
                <Link to={item.to} onClick={handleLinkClick}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuButton;
