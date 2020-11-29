import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pic from "../components/Pic";
import { deletePic } from "../redux/images/actions";
import "../index.css";

const History = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePic(id));
  };
  const { pics } = useSelector((state) => state.picsReducer);

  useEffect((id) => {
    dispatch(deletePic(id));
  }, []);

  return pics.length ? (
    <div>
      <h1>History of viewing images</h1>
      <div>
        {pics.map((item, index) => (
          <React.Fragment key={item.id}>
            <Pic
              key={item.id + index}
              id={item.id}
              url={item.url}
              loading={item.loading}
              error={item.error}
            />
            <p>{item.name} </p>
            <p>{item.time} </p>
            <button className="btn" onClick={() => handleDelete(item.id)}>
              Delete from history
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  ) : (
    <>
      <h1>The history of fun is empty yet</h1>
    </>
  );
};

export default History;
