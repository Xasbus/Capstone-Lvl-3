import React from "react";
import { NavLink } from "react-router";

export function CollapsibleNavbar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "xasbus.github.io") rootPath = "/Capstone-Lvl-3";
  console.log(`The domain is ${domain}`);
  return (
    <nav className="nav-pills navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" to="#">
          Navigation
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link"
              aria-current="page"
              to={`${rootPath}/`}
            >
              Home
            </NavLink>
            <NavLink className="nav-link" to={`${rootPath}/consoles`}>
              Consoles
            </NavLink>
            <NavLink className="nav-link" to={`${rootPath}/games`}>
              Games
            </NavLink>
            <NavLink className="nav-link" to={`${rootPath}/accessories`}>
              Accessories
            </NavLink>
            <NavLink className="nav-link" to={`${rootPath}/Contact`}>
              Contact
            </NavLink>
            <NavLink className="nav-link" to={`${rootPath}/about`}>
              About
            </NavLink>
            <NavLink className="nav-link" to={`${rootPath}/signin`}>
              Sign In
            </NavLink>
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
