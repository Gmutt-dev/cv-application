import "../styles/CV.css";

import { EducationSection } from "./EducationSection";
import { GeneralInfoSection } from "./GeneralInfoSection";

export function CV() {
  return (
    <>
      <h1>
        Curriculum Vitae
        <br />
        <span>of</span>
      </h1>
      <GeneralInfoSection />
      <EducationSection />
    </>
  );
}
