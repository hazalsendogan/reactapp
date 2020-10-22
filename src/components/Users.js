import React, { Component } from "react";

import User from "./User";

import UserConsumer from "../context";

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;
          return (
            <div className="mt-5">
              {users.map((user) => (
                <User
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  salary={user.salary}
                  department={user.department}
                />
              ))}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;
