import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details/:id" element={<Details />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
