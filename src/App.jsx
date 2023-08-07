import { useState } from "react";
import "./styles/index.scss";
import { MainPage } from "./pages/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
