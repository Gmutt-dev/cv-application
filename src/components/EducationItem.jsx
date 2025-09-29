import "../styles/EducationItem.css";

import { useState } from "react";
import { LabelledInput } from "./LabelledInput";
import { format } from "date-fns";

// Same feedback as in GeneralInfoSection
export function EducationItem({
  educationListItem,
  handleDelete,
  handleChange,
}) {
  const [isEditable, setIsEditable] = useState(true);
  const [preEditEducationListItem, setPreEditEducationListItem] = useState({});

  function handleEdit() {
    setPreEditEducationListItem(educationListItem);
    setIsEditable(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditable(false);
  }

  return (
    <div className="education-item">
      {isEditable ? (
        <form
          action="#"
          method="POST"
          className="education-item-input"
          onSubmit={handleSubmit}
          data-id={educationListItem.id}
        >
          <LabelledInput
            type={"date"}
            value={
              educationListItem.startDate &&
              format(educationListItem.startDate, "yyyy-MM-dd")
            }
            labelText={"Start Date: "}
            onChange={(e) => {
              handleChange(educationListItem.id, {
                startDate: new Date(e.target.value),
              });
            }}
            required={true}
          />
          <LabelledInput
            type={"date"}
            value={
              educationListItem.endDate &&
              // You could wrap this in a function so that we only have to write the actual format code once and have the same throughout the app
              // since this is repeated elsewhere
              format(educationListItem.endDate, "yyyy-MM-dd") 
            }
            labelText={"End Date: "}
            onChange={(e) => {
              handleChange(educationListItem.id, {
                endDate: new Date(e.target.value),
              });
            }}
            required={true}
          />
          <LabelledInput
            type={"text"}
            value={educationListItem.institutionName}
            labelText={"Institution Name: "}
            onChange={(e) => {
              handleChange(educationListItem.id, {
                institutionName: e.target.value,
              });
            }}
            required={true}
          />
          <LabelledInput
            type={"text"}
            value={educationListItem.courseName}
            labelText={"Course Name: "}
            onChange={(e) => {
              handleChange(educationListItem.id, {
                courseName: e.target.value,
              });
            }}
            required={true}
          />
          <div className="button-container">
            <button type="submit">Submit</button>
            <button
              type="button"
              data-id={educationListItem.id}
              onClick={(e) => {
                if (Object.keys(preEditEducationListItem).length > 0)
                  handleChange(educationListItem.id, preEditEducationListItem);
                else handleDelete(e);
                setIsEditable(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="education-item-display">
          <p>
            {format(educationListItem.startDate, "d MMMM yyyy") +
              " to " +
              format(educationListItem.endDate, "d MMMM yyyy")}
          </p>
          <h2>{"Institution: " + educationListItem.institutionName}</h2>
          <p>{"Course: " + educationListItem.courseName}</p>
          <div className="button-container">
            <button
              type="button"
              data-id={educationListItem.id}
              onClick={handleDelete}
            >
              Delete
            </button>
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
