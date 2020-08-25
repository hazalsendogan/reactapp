import React, { Component } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
class App extends Component {
  render() {
    return (
      <div className="container">
          <Navbar title="User App" />
          <hr />
          <User name="Hazal Şendoğan" salary="3250 TL" department="IT" />
          <User name="Kübra Güler" department="IT" />
      </div>
    );
  }
}

export default App;
