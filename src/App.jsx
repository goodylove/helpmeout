import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./Components/Footer";
import { SignIn } from "./Pages/Login/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignIn />
    </>
  );
}

export default App;
