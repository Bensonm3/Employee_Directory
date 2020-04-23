import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the employees json array
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
        
          <EmployeeCard 
            name={employee.name.first+" "+employee.name.last}
            image={employee.picture.large}
            email={employee.email}
            location={employee.location.country}
            serviceyears={employee.registered.age}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

