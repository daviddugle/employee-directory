import React from "react";

function ResultList({results}) {
  return (




    <>

      <div className="card">
        <div className="img-container">
          <img alt={results.name.last} src={results.picture.large} />
        </div>
        <div className="card-body">

          <p>
            <strong>Name:</strong> {results.name.first} {results.name.last}
          </p>
          <p>
            <strong>Email:</strong> {results.email}
          </p>
          <p>
            <strong>Location:</strong> {results.location.city}
          </p>

        </div>
      </div>
    </>




  )
    

  
}

export default ResultList;