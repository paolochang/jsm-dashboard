import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
