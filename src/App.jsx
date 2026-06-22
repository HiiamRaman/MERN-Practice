import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import Card from "./components/Usercard";
import "./App.css";

function App() {
  const [count, setCount] = useState();

  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
