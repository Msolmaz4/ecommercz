import React from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componnet/Header";
import Homescren from "./screens/Homescren";
import Productscren from "./screens/Productscren";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homescren />} />
          <Route path="/product/:id" element={<Productscren />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
