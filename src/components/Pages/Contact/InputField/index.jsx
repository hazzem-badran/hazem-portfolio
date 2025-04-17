import React from "react";
import MsgError from "../../About/MsgError";

const InputField = ({ type = "text", name, placeholder, error }) => {
  const isTextArea = type === "textarea";

  return (
    <div className="input-group">
      {isTextArea ? (
        <textarea
          className="input-control"
          id={name}
          name={name}
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="input-control"
          id={name}
          name={name}
          required
        />
      )}
      {error && <MsgError>{error}</MsgError>}
    </div>
  );
};

export default InputField;
