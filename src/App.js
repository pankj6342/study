import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discussion from "./components/Discussion";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <nav>
          <Navbar />
        </nav>
        <main className="w-full">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Dashboard /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
