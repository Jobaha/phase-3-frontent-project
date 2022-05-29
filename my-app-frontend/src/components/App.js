import Topbar from "./TopBar";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:9393/projects")
      .then((resp) => resp.json())
      .then((data) => data.setAllProjects(data));
  }, []);

  return (
    <div>
      <Topbar />
    </div>
  );
}

export default App;
