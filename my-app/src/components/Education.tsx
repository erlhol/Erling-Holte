import React from 'react';

const Education: React.FC = () => {

    const myEvents: Array<Array<String>> = [ [ "2023-2025", "Universitetet i Oslo","Master i programmering og systemarkitekur"],
                                             [ "2023", "National University of Singapore", "Utveksling"],
                                             [ "2020-2023","Universitetet i Oslo", "Bachelor i programmering og systemarkitektur"],
                                             [ "2016-2019", "Lillestrøm Videregående skole", "Studiespesialisering med fordypning i realfag"]]
    return (
        <div className="timeline">
            {myEvents.map((value, i) => (
                <div className={`container ${i % 2 ===  0 ? 'left' : 'right'}`} key={i}>
                <div className="content">
                    <h2>{value[0]}</h2>
                    <p>{value[1]}</p>
                    <p>{value[2]}</p>
                </div>
                </div>
            ))}
        </div>);
};

export default Education;