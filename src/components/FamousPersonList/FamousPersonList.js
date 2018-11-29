import React, { Component } from 'react';

class FamousPersonList extends Component {
  render() {
    let listItem = this.props.famousPeopleList.map((person, i) => {
      return <li key={i}>{person.name} is famous for {person.role}</li>;
    })
    return (
      listItem
    );
  }
}

export default FamousPersonList;