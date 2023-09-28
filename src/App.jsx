import { useState } from "react";
import { SignIn } from "./Pages/Login/index";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <main className=" h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster position="top-right" />
    </main>
  );
}

export default App;
