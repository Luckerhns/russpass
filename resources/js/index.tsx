import React, { useContext, useState } from "react";
import ReactDOM from 'react-dom/client'
import "./styles/style.css";
import "./styles/style.favorite.css";
import "./styles/styleigor.css";
import "./styles/style.onetour.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);



root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
