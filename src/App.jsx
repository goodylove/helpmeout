import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SignIn } from "./Pages/Login/index";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignIn />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
