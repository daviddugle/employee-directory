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
      this.setState( results );
      console.log(results);
    });
  }





    render() {
        return (
            <div>
            <SearchForm />
            {this.state.results.map(result =>(
                <ResultList 
                
                picture={result.picture.medium}
                firstName={result.name.first}
                lastName={result.name.last}
                email={result.email}
                location={result.location.city}
                />



            ))}
            
            
            </div>

        )
    }



}

export default EmployeeResults;