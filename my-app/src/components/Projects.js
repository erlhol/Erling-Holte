import React from 'react';

function Projects() {

    const myProjects = [ [ "2023","Eget prosjekt", "EmnePlanleggern", "https://github.com/erlhol/EmnePlanleggern"],
    [ "2022", "Universitetet i Oslo", "IN2000 - Software Engineering med prosjektarbeid","https://github.com/erlhol/Oscyclo-IN2000"],
                         [ "2021", "Universitetet i Oslo","IN1060 - Bruksorientert design","https://www.uio.no/studier/emner/matnat/ifi/IN1060/v21/prosjekter-var-2021/dorstokkmila/"]]

    return (<div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {myProjects.map((values,i) => (
            <div key={i} style={{wordBreak: 'break-all'}}>
                <p>{values[1]} - {values[0]}</p>
                <p>{values[2]}</p>
                <p>{values[3]}</p>
            </div>
        ))}
    </div>);
};

export default Projects;