import { useState } from "react";

export function LabelledInput({
  type = "text",
  value = "",
  labelText = "<<label text goes here>>",
  onChange: onChangeHandler,
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
