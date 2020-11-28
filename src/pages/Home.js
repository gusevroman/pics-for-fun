import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPic } from "../redux/images/actions";
import Pic from "../components/Pic";

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPic());
  }

  render() {
    const { url, loading, error } = this.props.picsReducer;

    return (
      <div>
        <h1>Do you want a lot of fun?</h1>
        <button className="btn" onClick={() => this.props.dispatch(fetchPic())}>
          Show funny pics
        </button>

        <Pic url={url} loading={loading} error={error} />
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(Home);
