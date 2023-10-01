import React from 'react';

interface Props {
  pageHandler: (page: string) => void;
}

const Projects: React.FC<Props> = ({ pageHandler }) => {
    return (<div><p>Projects!</p></div>);
};

export default Projects;