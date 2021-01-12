import React from "react";

function SearchForm(props) {
  
  return (
      <>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Employee Directory</h1>
      
    </div>
  </div>
    <form>
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
        <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
    </>
  );
}

export default SearchForm;