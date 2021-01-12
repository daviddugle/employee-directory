import React from "react";

function SearchForm({value, handleInputChange}) {
  
  return (
      <>
  
    <div>
        <label htmlFor="search">Search:</label>
        <input
          value={value}
          onChange={handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
        />
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button> */}
        {/* <button onClick={props.handleFormSort} className="btn btn-success ml-3 mt-3">
          Sort by Name
        </button> */}
        </div>
    </>
  );
}

export default SearchForm;