import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Home = React.lazy(() => import("../pages/Home"));

const RoutesApp = () => (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <BrowserRouter basename="react-lazy">
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default RoutesApp;
