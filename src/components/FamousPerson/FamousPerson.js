import React, { Component } from 'react';

class FamousPerson extends Component {

  state = {
    user: {
      name: '',
      role: ''
    }
  }

  clickHandler = () => {
    console.log('clicked submit', this.state.user);
  }

  handleChange = (propName) => {
    return (event) => {
      this.setState({
        user: {
          ...this.state.user,
          [propName]: event.target.value
        }
      })
    }
  }

  render() {
    return (
      <div>
        <p>Name:</p>
        <input type="text" onChange={this.handleChange('name')}/>
        <p>Role:</p>
        <input type="text" onChange={this.handleChange('role')}/>
        <p>{this.state.user.name} is famous for {this.state.user.role}</p>
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default FamousPerson;