import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Routes from "./Routes/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default connect((state) => {
  return state;
})(App);
