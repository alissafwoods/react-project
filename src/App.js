import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />
        <Search />
        <footer>
          <a
            href="https://github.com/alissafwoods/react-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          by Alissa Woods
        </footer>
      </div>
    </div>
  );
}
