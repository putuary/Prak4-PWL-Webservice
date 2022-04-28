import React from "react";
import "../css/Home.css";
// import profile from "../img/Profile.jpg";
import profile2 from "../img/Profile2.jpg";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import insta from "../img/instagram.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid home-body">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="my-info ">
              <img src={profile2} alt="" />
              <h1>
                Putu Ary <br /> Kusuma Yudha
              </h1>
              <hr className="hr" />
              <p>SOFTWARE DEVELOPER</p>
              <div className="social">
                <a href="https://linkedin.com/in/putu-ary-kusuma-yudha-923871201" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/putuary" target="_blank" rel="noreferrer">
                  <img src={github} alt="" />
                </a>
                <a href="https://instagram.com/putuary26" target="_blank" rel="noreferrer">
                  <img src={insta} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="info">
              <p className="first-line">Hello</p>
              <p className="second-line">Here's who I am & what I do</p>
              <div className="btn-div">
                <Link to="/Skills" className="btn btn-white">
                  SKILLS
                </Link>
                <Link to="/Project" className="btn btn-blue">
                  PROJECTS
                </Link>
              </div>
              <p className="last-para">I'm a 21-year-old software and web developer staying at Lampung Selatan, Indonesia. I am pursuing an Computer Bachelor Degree and currently in the 3th year of this four-year degree program. </p>
              <p className="last-para">
                My interests include solving some real-life problem via web & mobile apps and solving programming problems. Connect with me on{" "}
                <a href="https://www.linkedin.com/in/putu-ary-kusuma-yudha-923871201" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>{" "}
                and have a look at my{" "}
                <a href="https://github.com/putuary26" target="_blank" rel="noreferrer">
                  Github
                </a>{" "}
                profile .<br />
                <br />I am always open and excited to learn and work with like-minded people and want to be a successful developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
