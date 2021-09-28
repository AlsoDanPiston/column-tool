import React from 'react';

export default function HomeScreen() {

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Column Fixer Tool</h1>
        </div>
        <br/>
        <br/>
        <div className="row">
          <h5>Paste in Columns you wish you had (either seperated by comma or pasted top row of Excel sheet):</h5>
          <input className="form-control" type="text" placeholder="Default input"></input>
        </div>
        <br/>
    
        <div className="row">
          <h5>Paste in Input Columns (either seperated by comma or pasted top row of Excel sheet):</h5>
          <input className="form-control" type="text" placeholder="Default input"></input>
        </div>
        <br/>
      
        <div className="row">
          <h5>Input table/dataframe name:</h5>
          <input className="form-control" type="text" placeholder="Default input"></input>
        </div>
        <br/>
        <br/>
      </div>

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm">
            <button type="button" className="btn btn-primary">Next Step</button>
          </div>
          <div className="col-sm">
            <button type="button" className="btn btn-primary">Load Saved Schema</button>
          </div>
          <div className="col-sm">
            <button type="button" className="btn btn-primary">Manage Schema</button>
          </div>
        </div>
      </div>
    </div>
 )
}





