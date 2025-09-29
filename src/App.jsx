import "./App.css";
import { CV } from "./components/CV";
import { Analytics } from "@vercel/analytics/react";

// General feedback from playing with the app
// +
// - Good use of useState and immutable updates!
// - Project structure is good
// - Your use of reusable components is good
// - Not much else to say really, everything looks good for this stage. Keep on building!
// - Comments elsewhere are just suggestions to improve or nitpicks
//
// -
// - it is not obvious when and why things become visible on hover - I would just make these static
// - if you want to keep hover, add a css hover transition to it (200-300 ms is fine) so it is not jarring
// - there are some broad guidelines around what length of text is readable. 50-75 characters is good https://baymard.com/blog/line-length-readability
//      - With this in mind I would make the main box narrower in general
//      - Inputs are kind of too long

function App() {
  return (
    // This could be a main element instead of a div
    <div className="cv">
      <CV />
      <Analytics />
    </div>
  );
}

export default App;
