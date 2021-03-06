import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";

class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
    error:false
  };

  validateForm = () => {
    const { name, salary, department } = this.state;

    if (name === "" || salary === "" || department === "") {
      return false;
    }
    return true;
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount = async () => {
    const { id } = this.props.match.params;

    const response = await axios.get(`http://localhost:3000/users/${id}`);

    const { name, department, salary } = response.data;

    this.setState({
      name,
      department,
      salary,
    });
  };

  updateUser = async (dispatch, e) => {
    e.preventDefault();
    //Update User
    const { name, department, salary } = this.state;

    const updatedUser = {
      name,
      salary,
      department,
    };

    if (!this.validateForm()) {
      this.setState({
        error: true,
      });
      return;
    }

    const { id } = this.props.match.params;

    const response = await axios.put(
      `http://localhost:3000/users/${id}`,
      updatedUser
    );
    dispatch({ type: "UPDATE_USER", payload: response.data });

    //Redirecting
    this.props.history.push("/");
  };

  render() {
    const { name, department, salary,error } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mt-5">
              <div className="card">
                <div className="card-header">
                  <h4>Update User Form</h4>
                </div>
                <div className="card-body">
                  {error ? (
                    <div className="alert alert-danger">
                      Lütfen bilgilerinizi giriniz
                    </div>
                  ) : null}
                  <form onSubmit={this.updateUser.bind(this, dispatch)}>
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
