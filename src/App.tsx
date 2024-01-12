import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "../subModule/src/components/Button";
import Input from "../subModule/src/components/Input";
import TheHeader from "../subModule/src/components/Header";
import TheFooter from "../subModule/src/components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button />
      <Input />
      <TheHeader />
      <TheFooter />
    </>
  );
}

export default App;
