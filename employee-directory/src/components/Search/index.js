import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";


function employeeSearch() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = employees.filter(employee =>
      employee.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    this.setstate({searchResults});
  }, [searchTerm]);
  



// function Search(){
    return (
      <div className="searchform">
        <input
          type="text"
          placeholder="Search Employees by First Name"
          // {searchTerm}
          // onChange={handleChange}
        />
      </div>
    );
  }

  export default Search
  