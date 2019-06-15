import React, { Component } from "react";
import ChildPage from "./ChildPage";

class MountPage extends Component {
  state = {};

  constructor() {
    super();

    console.log("MountPage Constructor Called");
  }

  componentDidMount() {
    console.log("MountPage componentDidMount  called");
  }

  render() {
    console.log("MountPage render called");

    return (
      <React.Fragment>
        <span> Component Lifecycle Hooks</span>
        <br />
        <h2>Mount Hooks</h2>
        <p>The mounting hooks are executed in the following order.</p>
        <br />
        <ul>
          <li>
            1. Contructor - good place to set state directly. Must pass props to
            contructor otherwise no props will be available.
          </li>
          <li>
            2. Render - the component is injected into the DOM. All the children
            components will be render recursively.
          </li>
          <li>3. ComponentDidMount</li>
        </ul>
        <br />
        <br />
        <p>
          This hooks are only availabe inside a class component, not stateless
          functional components.
        </p>

        <ChildPage />
      </React.Fragment>
    );
  }
}

export default MountPage;
