import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import axios from "axios";


class EmployeeResults extends Component {



    state = {
        results: []
    };

    // When this component mounts, search the  API for ? do I need this area?

      componentDidMount() {
    axios.get("https://randomuser.me/api/?results=50&nat=us&inc=name,email,nat,location,dob,picture&format=JSON").then(res => {
      const results = res.data.results;
      this.setState( [results] );
      console.log(results);
    });
  }





    render() {
        return (
            <div>
            <SearchForm />
            <ResultList results={this.state.results}/>
            </div>

        )
    }



}

export default EmployeeResults;