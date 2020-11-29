import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Routes from "./Routes/index";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
