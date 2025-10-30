import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import JobList from "./components/jobdetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Job portal</h1>
      <h2>list of job portals</h2>
      <JobList />
    </>
  );
}

export default App;
