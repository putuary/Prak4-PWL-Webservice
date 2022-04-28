import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-4">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <p>
              {" "}
              <span className="my-name">
                <span className="names-block" />
                Putu Ary Kusuma Yudha
              </span>{" "}
              <i>/</i> Software Developer
            </p>
          </Link>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link my-nav-link active" to="/">
                  ABOUT ME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link my-nav-link active" to="/Skills">
                  SKILLS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link my-nav-link active" to="/Project">
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link my-nav-link active" to="/Coments">
                  COMENTS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
