import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./utils/routes";
import MainPage from "./pages/Anketa";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {

  return (
    <>
      <Header  />
      <Routes>
        {publicRoutes.map((e) => (
          <Route key={e.path} path={e.path} element={<e.element />} />
        ))}
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
