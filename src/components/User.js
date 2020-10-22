import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";
import {Link} from "react-router-dom";
import axios from "axios";

class User extends Component {
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok",
  };
  state = {
    isVisible: false,
  };
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isVisible: false,
  //     };
  //   }
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = async (dispatch,e) => {
    const {id} = this.props;
    // Delete Request 
    await axios.delete(`http://localhost:3000/users/${id}`);
    // Consumer Dispatch
    dispatch({
      type: "DELETE_USER",
      payload: id
    })
  };
  render() {
    const { id,name, salary, department } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div className="col-md-8 mb-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between" style={isVisible ? {backgroundColor: '#fad7ff'} : null}>
                    <h4 className="d-inline" onClick={this.onClickEvent}>
                      {name}
                    </h4>

                    <i
                      className="far fa-trash-alt"
                      style={{ cursor: "pointer" }}
                      onClick={this.onDeleteUser.bind(this,dispatch)}
                    ></i>
                  </div>
                  {isVisible ? (
                    <div className="card-body" style={isVisible ? {backgroundColor: '#CCCCFF'} : null}>
                      <p className="card-text">Maaş : {salary}</p>
                      <p className="card-text">Department : {department}</p>
                      <Link to={`edit/${id}`} className="btn btn-dark" >Update</Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default User;
