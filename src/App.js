import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import reactDOM from 'react-dom';
import employees1 from "./employees.json"

  class App extends Component {
    // Setting this.state.friends to the employees json array
    constructor(){
      super();
      this.toggleSortDateAscending = this.toggleSortDateAscending.bind(this)
      this.toggleSortDateDescending = this.toggleSortDateDescending.bind(this)
      this.state={
        search:null,
        result: employees
      };
    }
  sortByDateAscending(event) {
    let employeeList = employees;
      let sortedemployees = employeeList.sort((a, b) => (a.registered.age >= b.registered.age)? 1 : -1);
      this.setState({
        result: sortedemployees
       })
  }
  sortByDateDescending(event) {
    let employeeList = employees;
      let sortedemployees = employeeList.sort((a, b) => (a.registered.age <= b.registered.age)? 1 : -1);
      this.setState({
        result: sortedemployees
       })
  }
  toggleSortDateAscending (event) {
    this.sortByDateAscending()
  }
  toggleSortDateDescending (event) {
    this.sortByDateDescending()
  }  
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  render() {  
    return (
      <Wrapper>
        <Title>Employee Database
        <div>
      <input style={{fontSize: "20px"}}type="text" placeholder="search for employees" onChange={(e)=>this.searchSpace(e)} />
      <br></br>
      <button style={{color: "blue", fontSize: "15px"}} onClick = {(e)=>this.toggleSortDateAscending(e)} >Years of Service Ascending</button>
      <button style={{color: "green", fontSize: "15px"}} onClick = {(e)=>this.toggleSortDateDescending(e)} >Years of Service Decending</button>
      </div>
      
        </Title>
        {this.state.result.filter((data)=>{
          if(this.state.search == null)
            return data
          else if(data.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || data.location.country.toLowerCase().includes(this.state.search.toLowerCase()) || data.name.last.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    })
        .map(employee => (
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

