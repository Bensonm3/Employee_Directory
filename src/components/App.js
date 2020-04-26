import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import reactDOM from 'react-dom';
// import Search from "./components/Search";

class App extends Component {
  // Setting this.state.friends to the employees json array
  state = {
    employees
  };

  // componentDidMount() {
  //   this.searchEmployees("");
  // }



  render() {
      
    
    return (
      <Wrapper>
        <Title>Employee List
        <div>
      <input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
      {this.state}
      </div>
        </Title>
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

