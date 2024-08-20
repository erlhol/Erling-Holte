'use client';
import { Avatar, Text, Timeline } from '@mantine/core';
import React from 'react';

// Event data with an added description field
const myEvents = [
  {
    year: "AUGUST 2023 - D.D.",
    organization: "Universitetet i Oslo",
    title: "Master i programmering og systemarkitektur",
    logos: ['/images/uio.png'],
    description: "Studying advanced topics in programming and system architecture, including distributed systems, algorithms, and software engineering.",
  },
  {
    year: "JANUAR 2024 - AUGUST 2024",
    organization: "Universitetet i Oslo og Boston University",
    title: "Gründerskolen",
    logos: ['/images/uio.png', '/images/boston.png'],
    description: "Et program om entreprenørskap med undervisning på Universitetet i Oslo og Boston University. Utenlandsopphold i Boston der jeg jobbet i en MIT-startup.",
  },
  {
    year: "JANUAR 2023 - MAI 2023",
    organization: "National University of Singapore",
    title: "Utveksling",
    logos: ['/images/nus.png'],
    description: "Utvekslingssemester ved NUS, hvor jeg tok emner i informatikk, datasikkerhet, klassisk musikk, økonomi og sosiologi. Denne erfaringen gjorde at jeg fikk opplevde en ny kultur og akademisk miljø.",
  },
  {
    year: "AUGUST 2023 - JUNI 2023",
    organization: "Universitetet i Oslo",
    title: "Bachelor i programmering og systemarkitektur",
    logos: ['/images/uio.png'],
    description: "Fullførte Bachelorgrad i programmering og systemarkitektur, med emner i algoritmer, operativsystemer, databaser, objektorientert programmering og funksjonell programmering.",
  },
  {
    year: "AUGUST 2016 - JUNI 2019",
    organization: "Lillestrøm Videregående skole",
    title: "Studiespesialisering med fordypning i realfag",
    logos: ['/images/lillestrom.jpg'],
    description: "Fysikk, R-matte og IT som spesialisering.",
  },
];

export default function MyTimeline() {
  return (
    <Timeline bulletSize={40} lineWidth={2}>
      {myEvents.map((event, index) => (
        <Timeline.Item
          key={index}
          title={`${event.title} - ${event.organization}`}
          bullet={
            <Avatar.Group>
              {event.logos.map((logo, idx) => (
                <Avatar key={idx} src={logo} alt={event.organization} size={40} radius="xl" />
              ))}
            </Avatar.Group>
          }
        >
          <Text size="sm" color="dimmed">{event.year}</Text>
          <Text size="sm">{event.description}</Text> {/* Added description field */}
        </Timeline.Item>
      ))}
    </Timeline>
  );
}