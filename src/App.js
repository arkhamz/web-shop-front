import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
