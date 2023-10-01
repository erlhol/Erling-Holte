import React from 'react';
import moment from 'moment';

const AboutMe: React.FC = () => {
    const years = moment().diff('2000-12-01', 'years');
    return (<div><p>Jeg er en {years} år gammel informatikkstudent</p></div>);
};

export default AboutMe;