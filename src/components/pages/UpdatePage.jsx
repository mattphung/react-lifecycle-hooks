import React, { Component } from "react";

class UpdatePage extends Component {
  state = {};

  constructor() {
    super();

    console.log("UpdatePage Constructor Called");
  }

  componentDidMount() {
    console.log("UpdatePage componentDidMount  called");
  }

  render() {
    console.log("UpdatePage render called");

    return (
      <React.Fragment>
        <span> Component Lifecycle Hooks</span>
        <br />
        <h2>Update Hooks</h2>
        <p>The update hooks are executed in the following order.</p>
        <br />
        <ul>
          <li>
            1. Render - the component is injected into the DOM. All the children
            components will be render recursively.
          </li>
          <li>2. ComponentDidUpdate</li>
        </ul>
        <br />
        <br />
        <p>
          This hooks are only availabe inside a class component, not stateless
          functional components.
        </p>
      </React.Fragment>
    );
  }
}

export default UpdatePage;
