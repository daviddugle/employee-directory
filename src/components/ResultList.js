import React from "react";

function ResultList(props) {
  return (

    <div className="card">
      <div className="img-container">
        <img alt={props.lastName} src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>

  );
}

export default ResultList;