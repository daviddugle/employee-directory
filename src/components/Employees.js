import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

import axios from "axios";


class EmployeeResults extends Component {



  state = {
    onChangingList: [],
    results: [],
    search: ""
  };

  // When this component mounts, search the  API for ? do I need this area?

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20&nat=us&inc=name,login,email,nat,location,id,dob,picture&format=JSON").then(res => {
      const results = res.data.results;
      this.setState({ results: results, onChangingList: results });
      console.log(results)
    });
  }


  // this is the value of the input field
  handleInputChange = event => {
    const searchValue = event.target.value
    const filteredList = this.state.onChangingList.filter(user => user.name.first.toLowerCase().includes(searchValue.toLowerCase()) || user.name.last.toLowerCase().includes(searchValue.toLowerCase()))
    this.setState({ search: searchValue, results: filteredList })
  };
  //   //this is to check for a value
  handleFormSubmit = event => {
    event.preventDefault();
    // this.searchMovies(this.state.search);
    console.log("submit button")
    console.log(event.target.value)
    // const newArr = this.state.results.filter(employee =>)

  };

  handleFormSort = event => {
    event.preventDefault();
    const sorts = this.state.results;
    sorts.sort((a, b) => {
      if (a.name.last > b.name.last) {
        return 1
      }
      else {
        return -1
      }

    })
    this.setState({ sorts })
  }





  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Employee Directory</h1>

          </div>
        </div>

        <SearchForm
          results={this.state.results}
          handleFormSubmit={this.handleFormSubmit}
          handleFormSort={this.handleFormSort}
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map(employee => (
              <ResultList
                results={employee}
                key={employee.id.value}

              />
            ))}
          </tbody>
        </table>


      </div>

    )
  }



}

export default EmployeeResults;