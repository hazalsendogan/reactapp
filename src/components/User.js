import React, { Component } from "react";
import PropTypes from "prop-types";

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
  onClickEvent = (number,e) => {
    console.log(this);
  }

  render() {
    const { name, salary, department } = this.props;
    const { isVisible } = this.props;
    return (
      <div>
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="d-inline" onClick={this.onClickEvent.bind(this,34)}>
                {name}
              </h4>

              <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
            </div>
            {isVisible ? (
              <div className="card-body">
                <p className="card-text">Maaş : {salary}</p>
                <p className="card-text">Department : {department}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};

export default User;
