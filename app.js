import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Home/Layout";
import LeftsideBlog from "./assets/LeftsideBlog";
import Readingblog from "./component/Readingblog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage5 />} />
          {/* <Route path="/about" element={<LeftsideBlog />} />
          <Route path="/readingblog" element={<Readingblog />} /> */}
          <Route path="*" element="no page found" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
