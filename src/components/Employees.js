import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

import axios from "axios";


class EmployeeResults extends Component {



    state = {
        results: [],
        search: ""
    };

    // When this component mounts, search the  API for ? do I need this area?

      componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20&nat=us&inc=name,login,email,nat,location,id,dob,picture&format=JSON").then(res => {
      const results = res.data.results;
      this.setState( {results: results} );
      console.log(results)
    });
  }

  
  // this is the value of the input field
//   handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };
  //this is to check for a value
//   handleFormSubmit = event => {
//     event.preventDefault();
//     // this.searchMovies(this.state.search);

//     console.log(event.target.value)
//     // const newArr = this.state.results.filter(employee =>)

//   };





    render() {
        return (
            <div>
            <SearchForm
            results={this.state.results}
            handleFormSubmit={this.handleFormSubmit}
            // value={this.state.search}
            />
            {this.state.results.map(employee =>(
                <ResultList 
                results={employee}
                key={employee.id.value}
                
                />

            ))}
            
            
            </div>

        )
    }



}

export default EmployeeResults;