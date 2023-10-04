import React from 'react';

import forsvaret_logo from './logos/experience/forsvaret.jpg';
import imo_logo from './logos/experience/imo.png';
import vitenparken_logo from './logos/experience/vitenparken.png'
import norli_logo from './logos/experience/norli.png'
import uio_logo from './logos/experience/uio.png'
import lillestrom_kirke_logo from './logos/experience/lillestrom_kirke.png'

function Work() {

    const workExperience = 
    [ [ "2019-2020", "Førstegangstjeneste HMKG","Geværsoldat hos Hans Majestet Kongens Garde. 2. gardekompani",forsvaret_logo],
    [ "2022", "Frivillig IMO", "Var guide for Peru under den 63. internasjonale matematiske olympiaden som ble holdt i Oslo fra 10. til 15. juli",imo_logo],
    [ "2021-2022","Vitenvert", "Jobbet med arrangering og gjennomføring av sommerskole og andre arrangementer i regi av Vitenparken i Ås.",vitenparken_logo],
    [ "2022", "Butikkmedarbeider", "Ekstrahjelp julen 2022 som butikkmedarbeider hos Norli i Lillestrøm",norli_logo],
    [ "2021-D.D","Gruppelærer","Stillingen innebærer forberedelse og gjennomføring av undervisning gjennom gruppetimer og retting av obligatoriske oppgaver.",uio_logo],
    ["2020-2023","Kormedarbeider","Hentet barna på skolen og fulgte dem til øvelseslokalet, skar opp frukt og hjalp til med diverse, holdt øvelse dersom dirigenten var borte.",lillestrom_kirke_logo]]
    return (
        <>
        {workExperience.map((value, i) => (
            <div key={i}>
            <div className="content">
                <h2>{value[1]}</h2>
                <p>{value[0]}</p>
                <p>{value[2]}</p>
                <img style={{
                    maxWidth: '150px',
                    maxHeight: '150px',
                    width:'auto',
                    height:'auto'}}
                    src={value[3]} alt="img"/>
            </div>
            </div>
        ))}
        </>
        
    );
};

export default Work;