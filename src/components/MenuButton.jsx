import React, { memo, useCallback } from "react";
import { useMenuStore } from "../store/useMenuStore";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {LINKS } from "../constant/links"

const MenuButton = memo(() => {
  const { isMenuOpen, toggleMenu } = useMenuStore();

  const handleLinkClick = useCallback(() => {
    setTimeout(toggleMenu, 100);
  }, [toggleMenu]);
  return (
    <>
      <div
        id="menu-toggle-btn"
        name="menuToggleButton"
        className="absolute right-6 top-5 w-10 h-10 cursor-pointer rounded-full bg-[#E8F9FF] border border-white flex items-center justify-center z-10 transition-opacity duration-500"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FontAwesomeIcon
            id="menu-close-icon"
            name="menuCloseIcon"
            icon={faXmark}
            className="text-primary w-6 h-6 text-[#e02f6b]"
          />
        ) : (
          <FontAwesomeIcon
            id="menu-bars-icon"
            name="menuBarsIcon"
            icon={faBars}
            className="text-primary w-6 h-6 text-[#e02f6b]"
          />
        )}
      </div>
      {isMenuOpen && (
        <div 
          id="menu-overlay"
          name="menuOverlay"
          className="w-full h-full  flex flex-col items-center justify-center"
        >
          <ul 
            id="menu-list"
            name="menuList"
            className="flex flex-col items-center gap-6"
          >
          {LINKS.map((item, index) => (
              <li
                key={item.to}
                id={`menu-item-${index}`}
                name={`menuItem${item.label.replace(/\s+/g, '')}`}
                className="text-3xl font-medium transition-all duration-300 hover:text-[#e02f6b] hover:scale-150 hover:shadow-md"
              >
                <Link 
                  to={item.to} 
                  onClick={handleLinkClick}
                  id={`menu-link-${index}`}
                  name={`menuLink${item.label.replace(/\s+/g, '')}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
});

export default MenuButton;
