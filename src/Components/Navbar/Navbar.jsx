import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container my-4 position-absolute top-0 start-0 end-0">
      <div className="d-flex justify-content-between">
        <div className="logo">
          <NavLink className="h4 text-decoration-none logo-text" to="/home">FinBank</NavLink>
        </div>
        <div className="links-account d-flex">
          <div className="links mx-4">
            <NavLink className={({isActive})=> "me-3 me-md-5 text-decoration-none "+ (isActive? "active-link":"")  } to="/home">Home</NavLink>
            <NavLink className={({isActive})=> "me-3 me-md-5 text-decoration-none "+ (isActive? "active-link":"")  } to="/customers">Customers</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
