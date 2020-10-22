import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";
import axios from "axios";

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    department: "",
    salary: "",
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = async (dispatch,e) => {

    e.preventDefault();

    console.log("Test");

    const { name, department, salary } = this.state;

    const newUser = {
      name,
      department,
      salary,
    };

    const response = await axios.post("http://localhost:3000/users",newUser);
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  render() {
    const { visible, name, department, salary } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mt-5">
              <button
                className="btn btn-dark btn-block mb-2"
                onClick={this.changeVisibility}
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation className="box" pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div
                    className="card-header"
                    style={visible ? { backgroundColor: "#99CCCC" } : null}
                  >
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input
                          name="department"
                          id="department"
                          type="text"
                          className="form-control"
                          placeholder="Enter Department"
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="salary">Salary</label>
                        <input
                          name="salary"
                          id="salary"
                          type="text"
                          className="form-control"
                          placeholder="Enter Salary"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-danger btn-block"
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
