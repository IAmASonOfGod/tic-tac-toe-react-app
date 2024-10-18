import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalContextProvider } from "./contexts/modalContext";
import { GameContextProvider } from "./contexts/GameContext";
import Provider from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <GameContextProvider>
        <Provider>
          <App />
        </Provider>
      </GameContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
