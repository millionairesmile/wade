import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Nfts from "./components/Nfts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ABOUT" element={<About />} />
        <Route path="/NFTS" element={<Nfts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
