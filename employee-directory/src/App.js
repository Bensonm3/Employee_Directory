import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import reactDOM from 'react-dom';
// import Search from "./components/Search";

class App extends Component {
  // Setting this.state.friends to the employees json array
  constructor(){
    super();
    this.toggleSortDate = this.toggleSortDate.bind(this)
    this.state={
      search:null,
      result: employees
    };
  }
  sortByDate() {
    let employeeList = employees;
    let sortedemployees = employeeList.sort((a, b) => (a.registered.age > b.registered.age)? 1 : -1);
    this.setState({
     result: sortedemployees
    })
  }
  toggleSortDate (event) {
    this.sortByDate()
  }
  revertList(event) {
    let originalList = employees;
    this.setState({
      result: originalList
    })
    console.log(originalList)
  }
  toggleRevert(event) {
    this.revertList()
    console.log("click!@!@@!@!")
    }
  
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
 




  render() {  
    return (
      <Wrapper>
        <Title>Employee List
        <div>
      <input type="text" placeholder="search for employees" onChange={(e)=>this.searchSpace(e)} />
      <br></br>
      <button onClick = {(e)=>this.toggleSortDate(e)} >Sort by Years of Service</button>
      <button onClick = {(e)=>this.toggleRevert(e)} >Revert</button>
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

