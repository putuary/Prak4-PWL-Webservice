import React from "react";

export default function ProjectCard({ pData }) {
  return (
    <>
      <div className="card-container">
        {pData.map((element, index) => {
          const { name, github, live, tech, image, discription, mode } = element;
          return (
            <>
              <div className="card-project" key={index}>
                <div className="card-project-details">
                  <h2>
                    <span /> {name}
                  </h2>
                  <p className="emphasis">
                    (<b>Techology :</b>
                    {tech})
                  </p>
                  <p className="card-project-discr">{discription}</p>
                  <div className="project-links">
                    <a href={github} className="btn btn-blue" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                    <a href={live} className="btn btn-white" target="_blank" rel="noopener noreferrer">
                      {mode}
                    </a>
                  </div>
                </div>
                <div className="card-project-image">
                  <a href={live} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="CLICK HERE" className="project-image" />
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
