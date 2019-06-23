import React, { Component } from "react";

class UnmountPage extends Component {
  state = {};

  constructor() {
    super();

    console.log("UnmountPage Constructor Called");
  }

  componentDidMount() {
    console.log("UnmountPage componentDidUnmount  called");
  }

  render() {
    console.log("UnmountPage render called");

    return (
      <React.Fragment>
        <span> Component Lifecycle Hooks</span>
        <br />
        <h2>Unmount Hooks</h2>
        <p>The unmounting hooks are executed in the following order.</p>
        <br />
        <ul>
          <li>1. ComponentDidUnmount</li>
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

export default UnmountPage;
