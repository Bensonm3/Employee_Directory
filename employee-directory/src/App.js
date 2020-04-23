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

    this.state={
      search:null,
      result: employees
    };
  }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  // componentDidMount() {
  //   this.searchEmployees("");
  // }



  render() {
      
    
    return (
      <Wrapper>
        <Title>Employee List
        <div>
      <input type="text" placeholder="search for employees" onChange={(e)=>this.searchSpace(e)} />
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

