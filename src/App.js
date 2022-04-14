import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discussion from "./components/Discussion";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SingleAnswersPage from "./components/SingleAnswersPage";
import Courses from "./components/Courses";
import Puzzles from "./components/Puzzles.js";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <nav>
          <Navbar />
        </nav>
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/answers/" element={<SingleAnswersPage />} />
            <Route path="/courses/" element={<Courses />} />
            <Route path="/puzzles/" element={<Puzzles />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
