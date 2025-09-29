import "../styles/LabelledInput.css";

import { useState } from "react";

// Since you aren't using typescript, you can do runtime type checking with prop-types https://www.npmjs.com/package/prop-types
// This used to be built into react but is now a separate lib since typescript is the recommended approach
export function LabelledInput({
  type = "text",
  value = "", // Value should come from where you store the form data. Your default there is "" so you don't need a default here.
  labelText = "<<label text goes here>>",
  onChange: onChangeHandler, // No need to rename this, onChange is fine and what the input expects
  required = false,
}) {
  const [randomID] = useState(crypto.randomUUID());
  return (
    <div className="labelled-input">
      <label htmlFor={randomID}>{labelText}</label>
      <input
        id={randomID}
        type={type}
        value={value}
        onChange={onChangeHandler}
        required={required}
      />
    </div>
  );
}
