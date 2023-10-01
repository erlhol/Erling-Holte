import React from 'react';

interface Props {
  pageHandler: (page: string) => void;
}

const AboutMe: React.FC<Props> = ({ pageHandler }) => {
    return (<div><p>About me!</p></div>);
};

export default AboutMe;