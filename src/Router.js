import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Game from "./pages/Game/Game";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/game-on" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
