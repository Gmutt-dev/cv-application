import "./App.css";
import { CV } from "./components/CV";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="cv">
      <CV />
      <Analytics />
    </div>
  );
}

export default App;
