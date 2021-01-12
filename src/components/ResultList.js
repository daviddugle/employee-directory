import React from "react";

function ResultList(props) {
  return (
    
    

      props.results.map(result => (
        <>
          <div className="card">
            <div className="img-container">
              <img alt={result.name.last} src={result.picture.medium} />
            </div>
            <div className="card-body">
              
                <p>
                  <strong>Name:</strong> {result.name.first} {result.name.last}
                </p>
                <p>
                  <strong>Email:</strong> {result.email}
                </p>
                <p>
                  <strong>Location:</strong> {result.location.city}
                </p>
              
            </div>
          </div>
        </>


    

      ))
    

  );
}

export default ResultList;