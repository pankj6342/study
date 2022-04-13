import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discussion from "./components/Discussion";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/discussion" element={<Discussion />} />
          {/* <Route path="/" element={<Invoices />} /> */}
          {/* <Dashboard /> */}
          {/* <Navbar /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
