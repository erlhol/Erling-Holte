import React from 'react';
import moment from 'moment';

const AboutMe: React.FC = () => {
    const years = moment().diff('2000-12-01', 'years');
    return (<div><p>Jeg er en {years} år gammel informatikkstudent</p>
    <p>På denne siden kan du lese om min erfaring og mine prosjekter</p>
    <p>Jeg kommer fra Lillestrøm og har mange interesser (i tillegg til programmering 😁 ) </p>
    <div style={{textAlign: 'center'}}>
        <ul style={{display: 'inline-block'}}>
            <li>Fotball ⚽</li>
            <li>Piano 🎹</li>
            <li>Sang🎶</li>
            <li>Dans🕺</li>
            <li>Løping🏃🏻‍♂️</li>
        </ul>
    </div>
    
    </div>);
};

export default AboutMe;