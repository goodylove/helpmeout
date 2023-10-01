import { useState } from "react";
import { SignIn } from "./Pages/Login/index";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import SectionApp from "./Components/sectionapp";
import ExtPopUp from "./Components/expopup";
import Permision from "./Components/permision";
import RecordScreen from "./Components/recordscreen";

function App() {
  return (
    <main className=" h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sectionapp" element={<SectionApp />} />
        <Route path="/expopup" element={<ExtPopUp />} />
        <Route path="/permission" element={<Permision />} />
        <Route path="/recordscreen" element={<RecordScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster position="top-right" />
    </main>
  );
}

export default App;
