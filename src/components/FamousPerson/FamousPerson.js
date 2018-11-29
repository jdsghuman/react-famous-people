import React, { Component } from 'react';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

class FamousPerson extends Component {

  state = {
    newPerson: {
      name: '',
      role: ''
    },
    famousPeopleList: [
      {
        name: 'Michael Jordan',
        role: 'basketball'
      }, 
      {
        name: 'Prince',
        role: 'singer'
      }
    ]
  }

  clickHandler = (event) => {
    event.preventDefault();
    let newPerson = this.state.newPerson;
    this.setState({
      famousPeopleList: [
        ...this.state.famousPeopleList,
        newPerson
      ]
    })

    this.setState({
      newPerson: {
        name: '',
        role: ''
      }
    })
  }

  handleChange = (propName) => {
    return (event) => {
      this.setState({
        newPerson: {
          ...this.state.newPerson,
          [propName]: event.target.value
        }
      })
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <FamousPersonForm
        newPerson={this.state.newPerson}
        handleChange={this.handleChange}
        clickHandler={this.props.clickHandler} />
        <ul>
          <FamousPersonList famousPeopleList={this.state.famousPeopleList} />
        </ul>
        <pre>
          {JSON.stringify(this.state)}
        </pre>
      </div>
    );
  }
}

export default FamousPerson;