import React from 'react';

function Projects() {

    const myProjects = [ [ "2021", "Universitetet i Oslo","IN1060 - Bruksorientert design",],
                                             [ "2022", "Universitetet i Oslo", "IN2000 - Software Engineering med prosjektarbeid"],
                                             [ "2023","Eget prosjekt", "EmnePlanleggern"],]

    return (<div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {myProjects.map((values) => (
            <div>
                <p>{values[0]}</p>
                <p>{values[1]}</p>
                <p>{values[2]}</p>
                <p>{values[3]}</p>
            </div>
        ))}
    </div>);
};

export default Projects;