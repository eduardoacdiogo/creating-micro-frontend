import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const RoutesApp = () => (
  <BrowserRouter basename="react-multiples">
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
