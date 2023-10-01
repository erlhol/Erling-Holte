import React from 'react';

const Projects: React.FC = () => {

    const myProjects: Array<Array<String>> = [ [ "2021", "Universitetet i Oslo","Bruksorientert design"],
                                             [ "2022", "Universitetet i Oslo", "Software Engineering med prosjektarbeid"],
                                             [ "2023","Eget prosjekt", "EmnePlanleggern"],
                                             [ "2016-2019", "Lillestrøm Videregående skole", "Studiespesialisering med fordypning i realfag"]]

    return (<div><p>Projects!</p></div>);
};

export default Projects;