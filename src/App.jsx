import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p
          style={{
            fontSize: "70px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          Welcome to 
          Ventech Solution 
        </p>
      </div>
    </>
  );
}

export default App;
