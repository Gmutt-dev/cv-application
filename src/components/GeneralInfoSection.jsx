import "../styles/GeneralInfoSection.css";

import { useState } from "react";
import { LabelledInput } from "./LabelledInput";

const initialUserInfo = { name: "", email: "", phone: "" };

export function GeneralInfoSection() {
  const [isEditable, setIsEditable] = useState(true);
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [preEditUserInfo, setPreEditUserInfo] = useState({});

  function handleSubmit(e) {
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
