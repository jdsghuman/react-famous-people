import React, { Component } from 'react';

class FamousPersonForm extends Component {
  render() {
    return (
      <form>
        <p>Name:</p>
        <input value={this.props.newPerson.name} type="text" onChange={this.props.handleChange('name')} />
        <p>Role:</p>
        <input value={this.props.newPerson.role} type="text" onChange={this.props.handleChange('role')} />
        <button type="submit" onClick={this.props.clickHandler}>Submit</button>
      </form>
    );
  }
}

export default FamousPersonForm;