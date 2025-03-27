import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        EShop
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products">
              Product
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          {!isLoggedIn ? (
            <Link className="btn btn-primary" to={"/login"}>
              Login
            </Link>
          ) : (
            <button className="btn btn-danger" onClick={onLogoutHandler}>
              Logout
            </button>
          )}
          
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
