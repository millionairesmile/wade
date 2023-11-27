import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
