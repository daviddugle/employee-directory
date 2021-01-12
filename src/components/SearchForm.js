import React from "react";

function SearchForm(props) {
  
  return (
      <>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4 text-center">Employee Directory</h1>
      
    </div>
  </div>
    <form type="submit">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
        <button onClick={props.handleFormSort} className="btn btn-success ml-3 mt-3">
          Sort by Name
        </button>
      </div>
    </form>
    </>
  );
}

export default SearchForm;