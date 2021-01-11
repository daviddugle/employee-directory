import React from "react";

function ResultList(props) {
  return (
    
    <div className="card">
      {props.results.map(result => (
        <>
          <div className="img-container">
            <img alt={result.name} src={result.picture.medium} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {result.name}
              </li>
              <li>
                <strong>Email:</strong> {result.email}
              </li>
              <li>
                <strong>Location:</strong> {result.location.city}
              </li>
            </ul>
          </div>
        </>

      ))}
    </div>
  );
}

export default ResultList;