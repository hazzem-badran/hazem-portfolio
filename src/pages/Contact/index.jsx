import React from "react";
import MenuButton from "../../components/MenuButton";
import HeadingSection from "../../components/HeadingSection";
import ContactInfo from "../../components/Pages/Contact/ContactInfo";
import "./style.css";
import { useMenuStore } from "../../store/useMenuStore";
import Form from "../../components/Pages/Contact/Form";

const Contact = () => {
  const { isMenuOpen } = useMenuStore();

  return (
    <div className="style__section fade-in">
      <MenuButton />

      <div className="contact">
        {!isMenuOpen && (
          <>
            <HeadingSection title="Contact Me" />

            <div className="contact__content">
              <Form />
              <ContactInfo />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
