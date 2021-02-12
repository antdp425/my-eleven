import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav>
        <div className="navLogo">
          <Link to="/">My Eleven</Link>
        </div>
        <div className="navItems">
          <Link to="/teams">My Teams</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>
  );
}

export default Navbar;
