

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./App.css";
import React from "react";

function App() {
  return (
    <div >
      <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
