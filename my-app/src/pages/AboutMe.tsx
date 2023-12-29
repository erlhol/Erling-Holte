import React from 'react';
import moment from 'moment';

const AboutMe: React.FC = () => {
    const years = moment().diff('2000-12-01', 'years');
    return (<div><p>Jeg er en {years} år gammel informatikkstudent på Universitetet i Oslo.</p>
    <p>På denne siden kan du lese om min erfaring og mine prosjekter.</p>
    <p>Jeg kommer fra Lillestrøm og har mange interesser (i tillegg til programmering 😁 ) </p>
    <div style={{textAlign: 'center'}}>
        <ul style={{display: 'inline-block'}}>
            <li>Fotball ⚽</li>
            <li>Lesing📖</li>
            <li>Piano 🎹</li>
            <li>Sang🎶</li>
            <li>Dans🕺</li>
            <li>Løping🏃🏻‍♂️</li>
            <li>Å reise🗺️</li>
        </ul>
    </div>
    
    </div>);
};

export default AboutMe;