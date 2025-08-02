import React from "react";

function Header() {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">sd_devops</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.linkedin.com/in/swapnil-dhal"
              >
                linkedin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com//swapnil-dhal">
                github
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/swapnildhal.24/"
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
