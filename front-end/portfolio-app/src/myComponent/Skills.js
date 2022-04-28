import React from "react";
import "../css/Skills.css";
import Embedded from "../img/Embedded.jpg";
import Solid from "../img/Solid.jpg";

export default function Resume() {
  const style = {
    img: {
      height: "100%",
      width: "80%",
      padding: "1%",
      background: "white",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    skillSection: {
      padding: "3%",
      background: "white",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    bar: {
      textAlign: "left",
      marginBottom: "8%",
    },
  };
  return (
    <>
      <div className="component-body">
        <div className="component-details">
          <h1>
            <span className="blue-line" />
            Skills
          </h1>
          <div className="row justify-content-center my-5">
            <div className="col-xl-5 col-md-7 col-11" style={style.skillSection}>
              <div style={style.bar}>
                <div className="bar learning" data-skill="C++">
                  <span> 70%</span>
                </div>
                <div className="bar basic" data-skill="Python">
                  <span> 75%</span>
                </div>
                <div className="bar learning" data-skill="JavaScript">
                  <span> 70%</span>
                </div>
                <div className="bar intermediate" data-skill="PHP">
                  <span> 60%</span>
                </div>
                <div className="bar advanced" data-skill="HTML">
                  <span> 80%</span>
                </div>
                <div className="bar learning" data-skill="CSS">
                  <span> 70%</span>
                </div>
                <div className="bar advanced" data-skill="React-Native">
                  <span> 70%</span>
                </div>
              </div>
              <a href="#" download>
                <button className="btn btn-blue">Download Resume</button>
              </a>
            </div>
          </div>
          <h1>
            <span className="blue-line" />
            Certificates
          </h1>
          <div className="row jsutify-content-center">
            <div className="col-xl-4 col-md-6 mt-5">
              <img style={style.img} src={Embedded} alt="" />
            </div>
            <div className="col-xl-4 col-md-6 mt-5">
              <img style={style.img} src={Solid} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
