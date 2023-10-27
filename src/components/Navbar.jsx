import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid justify-content-start ">
          <h4 className="navbar-brand">User CRUD</h4>

          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
              <li className="nav-item p-3">
                <Link to="/create" className="nav-link bg-success text-white p-2">
                  Create User
                </Link>
              </li>
              <li className="nav-item p-3 ">
                <Link to="/read" className="nav-link text-info">
                  All User ({allusers.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
