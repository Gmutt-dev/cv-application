import "../styles/EducationSection.css";

import { useState } from "react";
import { EducationItem } from "./EducationItem";

export function EducationSection() {
  const [educationList, setEducationList] = useState([]);

  function handleAdd() {
    // For 'portability' (i.e. the ability to replace specific implementations)
    // You could create a 'createUUID' function that wraps crypto.randomUUID()
    // This would mean if you wanted to use the uuid library (common) or even have this value provided by a server, you only need to make once chance in one place
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

      {/* This button is only available on hover. I would prefer this was always visible for user discoverability */}
      <button type="button" className="button add-button" onClick={handleAdd}>
        add
      </button>
    </section>
  );
}
