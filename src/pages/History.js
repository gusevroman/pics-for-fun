import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import { deletePic } from "../redux/images/actions";

import Pic from "../components/Pic";
import Paginator from "../components/Paginator";

const History = () => {
  const [state, setState] = useState({
    currentPage: 1,
    picPerPage: 3,
  });

  const { currentPage, picPerPage } = state;
  const indexLastPic = currentPage * picPerPage;
  const indexFirstPic = indexLastPic - picPerPage;

  const paginatePage = (page) =>
    setState((state) => ({ ...state, currentPage: page }));

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePic(id));
  };

  useEffect((id) => {
    dispatch(deletePic(id));
  }, []);

  const { pics } = useSelector((state) => state.picsReducer);

  const paginatePics = pics.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <Pic
          key={item.id}
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
    );
  });

  return paginatePics.length ? (
    <div>
      <h1>History of viewing images</h1>
      <div>{paginatePics.slice(indexFirstPic, indexLastPic)}</div>
      <Paginator
        totalPic={paginatePics.length}
        picPerPage={picPerPage}
        paginatePage={paginatePage}
      />
    </div>
  ) : (
    <>
      <h1>The history of fun is empty yet</h1>
    </>
  );
};

export default History;
