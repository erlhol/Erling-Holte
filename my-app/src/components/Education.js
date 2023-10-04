import React from 'react';
import uio_logo from './logos/experience/uio.png'
import nus_logo from './logos/education/nus.jpg'
import lillestrom_logo from './logos/education/lillestrom.jpg'

function Education() {

    const myEvents = [ [ "2023-2025", "Universitetet i Oslo","Master i programmering og systemarkitekur",uio_logo],
                                             [ "2023", "National University of Singapore", "Utveksling",nus_logo],
                                             [ "2020-2023","Universitetet i Oslo", "Bachelor i programmering og systemarkitektur",uio_logo],
                                             [ "2016-2019", "Lillestrøm Videregående skole", "Studiespesialisering med fordypning i realfag",lillestrom_logo]]
    return (
        <div className="timeline">
            {myEvents.map((value, i) => (
                <div className={`container ${i % 2 ===  0 ? 'left' : 'right'}`} key={i}>
                <div className="content">
                    <h2>{value[2]}</h2>
                    <p>{value[0]}</p>
                    <p>{value[1]}</p>
                    <img style={{
                    maxWidth: '150px',
                    maxHeight: '150px',
                    width:'auto',
                    height:'auto'}}
                    src={value[3]} alt="img"/>
                </div>
                </div>
            ))}
        </div>);
};

export default Education;