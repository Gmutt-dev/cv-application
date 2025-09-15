import "../styles/EducationSection.css";

import { useState } from "react";
import { EducationItem } from "./EducationItem";

export function EducationSection() {
  const [educationList, setEducationList] = useState([]);

  function handleAdd() {
    setEducationList([...educationList, { id: crypto.randomUUID() }]);
  }

  function handleDelete(e) {
    setEducationList(
      educationList.filter((item) => item.id !== e.target.dataset.id)
    );
  }

  function handleChange(educationListItemId, changedProperties) {
    setEducationList(
      educationList.map((element) =>
        element.id === educationListItemId
          ? { ...element, ...changedProperties }
          : element
      )
    );
  }

  return (
    <section className="education">
      <h3>Education</h3>
      {educationList.map((educationListItem) => (
        <EducationItem
          key={educationListItem.id}
          educationListItem={educationListItem}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      ))}

      <button type="button" className="button add-button" onClick={handleAdd}>
        add
      </button>
    </section>
  );
}
