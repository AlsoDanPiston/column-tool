import React from 'react';

export default function MatchScreen() {

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <h4>Input</h4>
            <hr/>
            <ul className="input-columns list-unstyled">
              <li>AcctNum</li>
              <li>FName</li>
              <li>LName</li>
            </ul>
            <hr/>
          </div>
          <div className="col-md-6">
            <h4>Schema</h4>
            <hr/>
            <ul className="schema-columns list-unstyled">
              <li>AccountNumber</li>
              <li>FirstName</li>
              <li>LastName</li>
            </ul>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  )
}