import React from "react";
import MsgError from "../../About/MsgError";

const InputField = ({ type = "text", name, placeholder, error, id, fieldName }) => {
  const isTextArea = type === "textarea";

  return (
    <div className="input-group" id={`${id}-group`} name={`${fieldName}Group`}>
      {isTextArea ? (
        <textarea
          className="input-control"
          id={id || name}
          name={name || fieldName}
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="input-control"
          id={id || name}
          name={name || fieldName}
          required
        />
      )}
      {error && <MsgError>{error}</MsgError>}
    </div>
  );
};

export default InputField;
