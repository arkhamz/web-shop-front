import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
