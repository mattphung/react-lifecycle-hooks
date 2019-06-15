import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {};

  constructor() {
    super();

    console.log("HomePage Constructor Called");
  }

  componentDidMount() {
    console.log("HomePage componentDidMount  called");
  }

  render() {
    console.log("HomePage render called");

    return (
      <React.Fragment>
        <span> Component Lifecycle Hooks</span>
        <br />
        <h2>Available Hooks</h2>
        <p>The hooks are organized in order of execution</p>
        <br />
        <ul>
          <li>
            <Link to="/mount">Mount</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/unmount">unmount</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default HomePage;
