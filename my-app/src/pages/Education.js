import React from 'react';
import uio_logo from '../components/logos/experience/uio.png'
import nus_logo from '../components/logos/education/nus.jpg'
import lillestrom_logo from '../components/logos/education/lillestrom.jpg'
import boston from '../components/logos/education/boston.jpg'

function Education() {

    const myEvents = [ [ "AUGUST 2023 - D.D.", "Universitetet i Oslo","Master i programmering og systemarkitekur",uio_logo],
                        [ "JANUAR 2023 - D.D.", "Universitetet i Oslo og Boston University","Gründerskolen",uio_logo,boston],
                        [ "JANUAR 2023 - MAI 2023", "National University of Singapore", "Utveksling",nus_logo],
                        [ "AUGUST 2023 - JUNI 2023","Universitetet i Oslo", "Bachelor i programmering og systemarkitektur",uio_logo],
                        [ "AUGUST 2016 - JUNI 2019", "Lillestrøm Videregående skole", "Studiespesialisering med fordypning i realfag",lillestrom_logo]]
    return (
        <div className="timeline">
            {myEvents.map((value, i) => (
                <div className={`container ${i % 2 ===  0 ? 'left' : 'right'}`} key={i}>
                <div className="content">
                    <h2>{value[2]}</h2>
                    <p>{value[0]}</p>
                    <p>{value[1]}</p>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>

                    <img style={{
                    maxWidth: '150px',
                    maxHeight: '150px',
                    width:'auto',
                    height:'auto'}}
                    src={value[3]} alt="img"/>
                    {value[4] &&
                    <img style={{
                        maxWidth: '150px',
                        maxHeight: '150px',
                        width:'auto',
                        height:'auto'}}
                        src={value[4]} alt="img"/>
                     }
                     </div>
                    
                </div>
                </div>
            ))}
        </div>);
};

export default Education;