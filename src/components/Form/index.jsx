import React from "react";
import "./style.css";
import { useFormStatus } from "react-dom";

async function formAction(prevState, formData) {
  const errors = {};
  if (!formData.get("name")) errors.name = "Name is required";
  if (!formData.get("email")) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
    errors.email = "Email address is invalid";
  }
  if (!formData.get("subject")) errors.subject = "Subject is required";
  if (!formData.get("message")) errors.message = "Message is required"  ;

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const response = null;
    // const response = await axios.post(API_URL, Object.fromEntries(formData));
    return {
      message: response?.data?.message || "Message sent successfully!",
      type: "success",
    };
  } catch (error) {
    return {
      message: error.response?.data?.message || "Failed to send message!",
      type: "error",
    };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn" id="send-message" disabled={pending}>
      {!pending ? "Send Message" : "Sending..."}
    </button>
  );
}

const Form = () => {
  const [state, formActionDispatch] = React.useActionState(formAction, null);

  return (
    <form
      className="contact__form"
      id="contactForm"
      action={formActionDispatch}
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="Name"
          className="input-control"
          id="name"
          name="name"
          required
        />
        {state?.errors?.name && <ErrorMsg>{state.errors.name}</ErrorMsg>}
      </div>

      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          className="input-control"
          id="email"
          name="email"
          required
        />
        {state?.errors?.email && <ErrorMsg>{state.errors.email}</ErrorMsg>}
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Subject"
          className="input-control"
          id="subject"
          name="subject"
          required
        />
        {state?.errors?.subject && <ErrorMsg>{state.errors.subject}</ErrorMsg>}
      </div>

      <div className="input-group">
        <textarea
          placeholder="Message"
          className="input-control"
          id="message"
          name="message"
          required
        ></textarea>
        {state?.errors?.message && <ErrorMsg>{state.errors.message}</ErrorMsg>}
      </div>

      <div className="submit-btn">
        <SubmitButton />
      </div>

      {state?.message && (
        <div
          className={`alert ${
            state.type === "success" ? "alert-success" : "alert-error"
          }`}
        >
          {state.message}
        </div>
      )}
    </form>
  );
};


export default Form;