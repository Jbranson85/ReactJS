import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Counter;
