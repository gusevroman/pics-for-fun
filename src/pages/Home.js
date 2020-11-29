import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import { fetchPic } from "../redux/images/actions";

import Pic from "../components/Pic";

const Home = () => {
  const dispatch = useDispatch();
  const handeleClick = () => {
    dispatch(fetchPic());
  };
  const { url, username, loading, error } = useSelector(
    (state) => state.picsReducer
  );

  useEffect(() => {
    dispatch(fetchPic());
  }, []);

  return (
    <div>
      <h1>Do you want a lot of fun?</h1>

      <Button color="primary" onClick={handeleClick}>
        Show new funny pics
      </Button>

      <Pic url={url} loading={loading} error={error} />
      <span>Author: {username}</span>
    </div>
  );
};

export default Home;
