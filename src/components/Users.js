import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
      Total Users: {this.props.users.length}
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users);
