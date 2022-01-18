import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Login from "./views/Auth/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
