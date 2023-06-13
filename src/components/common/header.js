import React from "react";

import "../common/header.css";
import logo from "./../../assets/dark.png";
import { NavLink, useMatch } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const favouriteList = useSelector((state) => state.favourite.favouriteMovies);

  const favouriteMatch = useMatch("/movie-favourite");
  const homeMatch = useMatch("/movies");
  const aboutMatch = useMatch("/about-us");
  const contactMatch = useMatch("/contact-us");
  const signUpMatch = useMatch("/signUp");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w">
        <div className="container px-5">
          <a className="navbar-brand" href="/">
            <img src={logo} className="w-50" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link fw-bold mx-2 bord  ${
                    homeMatch?.isExact ? "active " : ""
                  }`}
                  aria-current="page"
                  to="movie"
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link fw-bold mx-2 bord ${
                    aboutMatch?.isExact ? "active" : ""
                  }`}
                  aria-current="page"
                  to="about-us"
                >
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link fw-bold mx-2 bord ${
                    contactMatch?.isExact ? "active" : " "
                  }`}
                  aria-current="page"
                  to="contact-us"
                >
                  ContactUs
                </NavLink>
              </li>
              <li className="nav-item position-relative">
                <NavLink
                  className={`nav-link fw-bold mx-2 bord ${
                    favouriteMatch?.isExact ? "active" : ""
                  }`}
                  aria-current="page"
                  to="movie-favourite"
                >
                  Favourite
                </NavLink>
                <p className="position-absolute top-0 end-0 badge bg-danger rounded-circle">
                  {favouriteList.length}
                </p>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link fw-bold mx-2 bord ${
                    signUpMatch?.isExact ? "active" : " "
                  }`}
                  aria-current="page"
                  to="signUp"
                >
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
