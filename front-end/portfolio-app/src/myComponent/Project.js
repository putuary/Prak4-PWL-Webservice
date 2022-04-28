import React from 'react';
import '../css/Project.css';
import ProjectCard from './subComponent/ProjectCard';
import data from './subComponent/ProjectData.js';

export default function Project() {

    return (
        <>
            <div className="component-body">
                <div className="component-details">
                    <h1><span className="blue-line" />Projects</h1>
                    <p>This all are my projects along with github and live demo link. You can go n explore all. If you want to contribute then checkout project's Readme on github.</p>
                    <ProjectCard pData={data} />
                </div>
            </div>
        </>
    )
}
