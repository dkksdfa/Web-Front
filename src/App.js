import React from "react";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
function App() {
  const url = "maindsfafe";
  return (
    <div>
      <Nav main={url === "main"} />
      <Main />
    </div>
  );
}

export default App;
