import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import Pic from "../components/Pic";
import { deletePic } from "../redux/images/actions";

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
    <>
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
            <p>Author image: {item.username} </p>
            <p>Viewing time: {item.time} </p>

            <Button color="secondary" onClick={() => handleDelete(item.id)}>
              Delete from history
            </Button>
          </React.Fragment>
        ))}
      </div>
    </>
  ) : (
    <>
      <h1>The history of fun is empty yet</h1>
    </>
  );
};

export default History;
