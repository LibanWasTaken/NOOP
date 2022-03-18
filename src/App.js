import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Error, List, Sites, LogPage, RegistrationPage } from "./pages";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tokens" element={<List />} />
        <Route exact path="/sites" element={<Sites />} />
        <Route exact path="/login" element={<LogPage />} />
        <Route exact path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
