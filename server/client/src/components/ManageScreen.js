import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function ManageScreen() {
  const history = useHistory();
  
  // get schema from selector
  // for now, use:
  const schemaObj = {
    '00000000001': '["a", "b", "c", "e"]',
    '00000000002': '["acct", "name"]',
  }

  // transpose to array of arrays to be able to use 
  let schemaArr = [];
  for (const [key, value] of Object.entries(schemaObj)) {
    schemaArr.push(value);
  }

  const SavedItem = () => {
    if (schemaArr.length > 0) {
      return (
        schemaArr.map((s, i) => {
          return <div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4" id={i}>{s}</div>
              <div className="col-md-1"></div>
              <div className="col-md-3"><button className="btn btn-success" id={`use-${i}`}>Use This Schema</button></div>
              <div className="col-md-2"><button className="btn btn-danger" id={`delete-${i}`}>Delete</button></div>
              <div className="col-md-1"></div>
            </div>
            <div>
              <br />
            </div>
          </div>
        })
      );
    }
  }

  return (
    <div className="screen-div">
      <div className="container text-center">
        <div className="row">
          <br/>
          <h4 className="text-center"><strong>Manage Schema</strong></h4>
          <br />
          <br />
          <hr />
          <br />
        </div>
      </div>
      <div className="container">
        <SavedItem />
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <hr />
          <button className="btn btn-primary button-size" onClick={()=> history.push("/")}>Home</button>
        </div>
      </div>
    </div>
  )
};