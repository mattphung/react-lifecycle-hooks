import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MountPage from "./components/pages/MountPage";
import UpdatePage from "./components/pages/UpdatePage";
import UnmountPage from "./components/pages/Unmount";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={HomePage} />
      <Route path="/mount" exact component={MountPage} />
      <Route path="/update" exact component={UpdatePage} />
      <Route path="/unmount" exact component={UnmountPage} />
    </React.Fragment>
  );
}

export default App;
