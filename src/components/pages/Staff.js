import React, { Component } from 'react';


class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h1>Welcome {currentUserName}</h1><br />
        <h2>Email: {currentUserEmail}</h2>
        <br />
        <iframe src="http://dev-env.zhczu9sr3x.us-west-2.elasticbeanstalk.com/" title="iframe Example 1" width="400" height="300">
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    );
  }
}

export default Staff;