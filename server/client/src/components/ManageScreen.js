import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { fetchSchema, getSchemaById, deleteSchema, addColumns } from '../actions';
import ParsePastedInputs from '../helpers/ParsePastedInputs';

export default function ManageScreen() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [stateToUpdate, setStateToUpdate] = useState("");

  const allSchema = useSelector((state) => state.manage);

  useEffect(() => {
    dispatch(fetchSchema());
  }, []);

  const clickDelete = (e) => {
    const clickedId = e.target.getAttribute("id");

    dispatch(deleteSchema(clickedId));

    window.location.reload()
  }

  const clickUse = (e) => {
    const clickedId = e.target.getAttribute("id");
    const indexStr = e.target.getAttribute("index");

    const selectedCols = allSchema.data[indexStr].columnlist.join(',');

    dispatch(getSchemaById(clickedId));

    const inputState = {
      newOutputCols : ParsePastedInputs(selectedCols),
      newInputCols : [],
      tableName: '',
    }

    // dispatch actions
    dispatch(
      addColumns({
        inputState,
      })
    ); 

    history.push('/');
  }

  const SavedItem = () => {
    return allSchema.loading ? (
      <div className="row" key="loading">Loading</div>
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
              <button className="btn btn-success" key={`but1-${i}`} id={s._id} index={i} onClick={clickUse}>Use Schema</button>
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
    <div className="screen-div" key="top-div">
      <div className="container text-center" key="h-1">
        <div className="row" key="r-1">
          <br/>
          <h4 className="text-center" key="title"><strong>Manage Schema</strong></h4>
          <br />
          <br />
          <hr />
          <br />
        </div>
      </div>
      <div className="container" key="h-2">
        <div className="row" key="r-2">
          <div className="col-md-1" key="col1-top"></div>
          <div className="col-md-2" key="col2-top"><strong>Schema Name</strong></div>
          <div className="col-md-2" key="col3-top"><strong>Columns</strong></div>
          <div className="col-md-1" key="col4-top"></div>
          <div className="col-md-3" key="col5-top"></div>
          <div className="col-md-2" key="col6-top"></div>
          <div className="col-md-1" key="col7-top"></div>
        </div>
        <hr />
        {/* SavedItem */}
        <SavedItem />
      </div>
      <div className="container">
        <div className="row justify-content-md-center" key="h-3">
          <hr />
          <button className="btn btn-primary button-size" key="button-home" onClick={()=> history.push("/")}>Home</button>
        </div>
      </div>
    </div>
  )
};