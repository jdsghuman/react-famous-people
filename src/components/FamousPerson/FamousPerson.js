import React, { Component } from 'react';

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
    let newFamousPerson = this.state.newPerson;
    this.setState({
      famousPeopleList: [
        ...this.state.famousPeopleList,
        newFamousPerson
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

    let listItem = this.state.famousPeopleList.map((person, i) => {
      return <li key={i}>{person.name} is famous for {person.role}</li>;
    })
    return (
      <div>
        <form>
          <p>Name:</p>
          <input value={this.state.newPerson.name} type="text" onChange={this.handleChange('name')} />
          <p>Role:</p>
          <input value={this.state.newPerson.role} type="text" onChange={this.handleChange('role')} />
          <ul>
            {listItem}
          </ul>
          <button type="submit" onClick={this.clickHandler}>Submit</button>
        </form>
        <pre>
          {JSON.stringify(this.state)}
        </pre>
      </div>
    );
  }
}

export default FamousPerson;