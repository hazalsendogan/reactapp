import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";

class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateUser = async (dispatch, e) => {

    e.preventDefault();
    //Update User
    console.log("Update User");
   
  };

  render() {
    const { name, department, salary } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mt-5">
              <div className="card">
                <div
                  className="card-header"
                >
                  <h4>Update User Form</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.updateUser.bind(this,dispatch)}>
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
                    <button type="submit" className="btn btn-danger btn-block">
                      Update User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default UpdateUser;
