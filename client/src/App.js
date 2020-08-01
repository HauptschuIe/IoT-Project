import React, { Fragment } from "react";
import "./App.css";

//components
import Frontpage from "./pages/frontpage";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Frontpage />
      </div>
    </Fragment>
  );
}

export default App;