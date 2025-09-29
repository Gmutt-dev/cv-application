import "../styles/GeneralInfoSection.css";

import { useState } from "react";
import { LabelledInput } from "./LabelledInput";

const initialUserInfo = { name: "", email: "", phone: "" };

export function GeneralInfoSection() {
  const [isEditable, setIsEditable] = useState(true);

  // userInfo and preEditUserInfo are related to eachother. To ensure that there is never a type mismatch you could combine these values
  // You would also only need to setState in one place and maintain less state. The less state to maintain, the less that can go wrong over time
  // Option one
  // const userInfo = {
  //   current: {name: "", email: "", phone: ""},
  //   previous: null // Whenever current changes, update this
  // }
  // Option two 
  // const userInfo = {
  //   changeLog: [{name: "", email: "", phone: ""}, {name: "", email: "", phone: ""}] // Append values to this. The most recent version is always the last, you can time travel any number of indexes back
  // }
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [preEditUserInfo, setPreEditUserInfo] = useState({});

  function handleSubmit(e) {
    // You could do some schema validation here
    // i.e. when submitting the form, does the object conform to some rules we have for it? 
    // email is valid email, name doesn't have too many chanracters, number is numeric
    // If it fails we could show an error message to the user
    // A good library for this is `zod` but there are many variations
    e.preventDefault();
    setIsEditable(false);
  }

  function handleCancel() {
    setUserInfo({ ...preEditUserInfo });
    setIsEditable(false);
  }

  function handleEdit() {
    setPreEditUserInfo({ ...userInfo });
    setIsEditable(true);
  }

  return (
    <section className="general-info">
      {isEditable ? (
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="general-info-input"
        >
          <LabelledInput
            type={"text"}
            value={userInfo.name}
            labelText={"Name:"}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            required={true}
          />
          <LabelledInput
            type={"email"}
            value={userInfo.email}
            labelText={"Email:"}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <LabelledInput
            type={"tel"}
            value={userInfo.phone}
            labelText={"Phone number:"}
            onChange={(e) =>
              // It would be nice to have some validation/constraints on this input - i.e. ensuring that values are numeric (and some limited symbols "+", "-")
              // You could use regex for this
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
          />
          <div className="button-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="general-info-display">
          <p className="name">{userInfo.name}</p>
          <p>&#9993;{" " + userInfo.email}</p>
          <p>&#9742;{" " + userInfo.phone}</p>
          <button type="button" className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
