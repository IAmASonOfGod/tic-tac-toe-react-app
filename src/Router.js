import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game/Game";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { ModalContextProvider } from "./contexts/modalContext";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <ModalContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/game-on" element={<Game />} />
          </Routes>
        </ModalContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default Router;
