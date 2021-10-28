import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { fetchSchema, getSchemaById } from '../actions';
import { deleteSchema } from '../actions';

export default function ManageScreen() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const [selectedSchema, setSelectedSchema] = useState("");

  const allSchema = useSelector((state) => state.manage);

  useEffect(() => {
    dispatch(fetchSchema());
  }, []);

  const clickDelete = (e) => {
    const clickedId = e.target.getAttribute("id");

    dispatch(deleteSchema(clickedId));

    // need to force a re-render here
  }

  const clickUse = (e) => {
    const clickedId = e.target.getAttribute("id");

    dispatch(getSchemaById(clickedId));

    //setSelectedSchema('')
  }

  const SavedItem = () => {
    return allSchema.loading ? (
      <div className="row">Loading</div>
    ) : (
      <div>
        {allSchema.data.map((s, i) => 
        <div>
          <div className="row" key={i}>
            <div className="col-md-1" key={`col1-${i}`}></div>
            <div className="col-md-2" key={`col2-${i}`}>{s.name}</div>
            <div className="col-md-2" key={`col3-${i}`}>{s.columnlist.map(c => <p>{c}</p>)}</div>
            <div className="col-md-1" key={`col4-${i}`}></div>
            <div className="col-md-3" key={`col5-${i}`}>
              <button className="btn btn-success" key={`but1-${i}`} id={s._id} onClick={clickUse}>Use Schema</button>
            </div>
            <div className="col-md-2" key={`col6-${i}`}>
              <button className="btn btn-danger" key={`but2-${i}`} id={s._id} onClick={clickDelete}>Delete</button>
            </div>
            <div className="col-md-1" key={`col7-${i}`}></div>
          </div>
          <br/>
        </div>)
        }
      </div>
    )
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
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">Schema Name</div>
          <div className="col-md-2">Columns</div>
          <div className="col-md-1"></div>
          <div className="col-md-3"></div>
          <div className="col-md-2"></div>
          <div className="col-md-1"></div>
        </div>
        <hr />
        {/* SavedItem */}
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