import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
