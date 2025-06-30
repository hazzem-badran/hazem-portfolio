import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "./style.css";
import { useFormStatus } from "react-dom";
import emailjs from "emailjs-com";
import InputField from "../InputField";
import Button from "../../../Button";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

async function formAction(prevState, formData) {
  const errors = {};
  if (!formData.get("name")) errors.name = "Name is required";
  if (!formData.get("email")) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
    errors.email = "Email address is invalid";
  }
  if (!formData.get("subject")) errors.subject = "Subject is required";
  if (!formData.get("message")) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) return { errors };

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      },
      PUBLIC_KEY
    );

    return { message: "Message sent successfully!", type: "success" };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { message: "Failed to send message!", type: "error" };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      id="send-message-btn" 
      name="sendMessageButton"
      type="submit" 
      stylee="btn__secondary"
    >
      {!pending ? "Send Message" : "Sending..."}
    </Button>
  );
}

const Form = () => {
  const [state, formActionDispatch] = React.useActionState(formAction, null);

  useEffect(() => {
    if (state?.type === "success") {
      Swal.fire({
        icon: "success",
        title: "Sent!",
        text: "Message sent successfully",
        confirmButtonText: "OK",
      });
    } else if (state?.type === "error") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send the message, please try again.",
        confirmButtonText: "OK",
      });
    }
  }, [state]);

  return (
    <form
      className="contact__form"
      id="contact-form"
      name="contactForm"
      action={formActionDispatch}
    >
      <InputField 
        name="name" 
        placeholder="Name" 
        error={state?.errors?.name}
        id="name-input"
        fieldName="nameInput"
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        error={state?.errors?.email}
        id="email-input"
        fieldName="emailInput"
      />
      <InputField
        name="subject"
        placeholder="Subject"
        error={state?.errors?.subject}
        id="subject-input"
        fieldName="subjectInput"
      />
      <InputField
        type="textarea"
        name="message"
        placeholder="Message"
        error={state?.errors?.message}
        id="message-input"
        fieldName="messageInput"
      />

      <div className="submit-btn" id="submit-btn-container" name="submitButtonContainer">
        <SubmitButton />
      </div>
    </form>
  );
};

export default Form;
