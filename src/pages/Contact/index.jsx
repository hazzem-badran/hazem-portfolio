import React from "react";
import MenuButton from "../../components/MenuButton";
import HeadingSection from "../../components/HeadingSection";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";
import "./style.css";
import { useMenuStore } from "../../store/useMenuStore";

const Contact = () => {
  const { isMenuOpen } = useMenuStore();

  return (
    <div className="style__section">
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
