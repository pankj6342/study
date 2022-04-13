import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
function Navbar() {
  return (
    <nav className="flex flex-col justify-items-center content-center text-center top-0 left-0 h-screen w-48 bg-green-400">
      <div>
        <Link to="/profile">
          <img
            className="w-20 h-20"
            src="https://cdn.codechef.com/sites/default/files/uploads/pictures/9add8f5b7067a81164b7a9116b1dcb79.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="nav-ele">
        <a href="/">Dashboard</a>
      </div>
      <div className="nav-ele">
        <a href="/profile">Profile</a>
      </div>
      <div className="nav-ele">
        <a href="/discussion">Discussion</a>
      </div>
      <div className="nav-ele">
        <a href="/puzzles">Puzzles</a>
      </div>
    </nav>
  );
}

export default Navbar;
