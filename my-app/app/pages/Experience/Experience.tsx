'use client';
import { Container, SimpleGrid, Card, Image, Text, Title } from "@mantine/core";
import classes from '../FeaturesGrid.module.css';
import React from "react";

const workExperience = [
  {
    image: '/images/empallo.jpeg', // Sørg for at dette bildet finnes, ellers kan du bruke en standardbilde
    title: 'Full stack utvikler',
    organization: 'Empallo',
    year: 'JUNI 2024 - AUGUST 2024',
    description: 'Intern hos Empallo, en helse-teknologisk startup ved MIT, Cambridge.',
  },
  {
    image: '/images/uio.png',
    title: 'Gruppelærer',
    organization: 'UiO',
    year: 'AUGUST 2021 - DESEMBER 2023',
    description: 'Stillingen innebærer forberedelse og gjennomføring av undervisning gjennom gruppetimer og retting av obligatoriske oppgaver.',
  },
  {
    image: '/images/norli.png',
    title: 'Butikkmedarbeider',
    organization: 'Norli',
    year: 'OKTOBER 2022 - JANUAR 2023',
    description: 'Ekstrahjelp julen 2022 som butikkmedarbeider hos Norli i Lillestrøm.',
  },
  {
    image: '/images/imo.png',
    title: 'Frivillig IMO',
    organization: 'IMO 2022',
    year: 'JULI 2022',
    description: 'Var guide for Peru under den 63. internasjonale matematiske olympiaden som ble holdt i Oslo fra 10. til 15. juli.',
  },
  {
    image: '/images/vitenparken.png',
    title: 'Vitenvert',
    organization: 'Vitenparken',
    year: 'JUNI 2021 - AUGUST 2022',
    description: 'Jobbet med arrangering og gjennomføring av sommerskole og andre arrangementer i regi av Vitenparken i Ås.',
  },
  {
    image: '/images/forsvaret.jpg',
    title: 'Førstegangstjeneste HMKG',
    organization: 'Forsvaret',
    year: 'AUGUST 2019 - JULI 2020',
    description: 'Geværsoldat hos Hans Majestet Kongens Garde. 2. gardekompani.',
  },
  {
    image: '/images/lillestrom_kirke.png',
    title: 'Kormedarbeider',
    organization: 'Lillestrøm Kirke',
    year: 'AUGUST 2020 - JUNI 2023',
    description: 'Hentet barna på skolen og fulgte dem til øvelseslokalet, skar opp frukt og hjalp til med diverse, holdt øvelse dersom dirigenten var borte.',
  },
];

export default function Experience() {
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Erfaring</Title>
      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>

        </Text>
      </Container>

      <Container size={1200} p={0}>
        <SimpleGrid cols={3} spacing="lg">
          {workExperience.map((experience, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={experience.image} alt={experience.title} height={160} />
              </Card.Section>
              <Text weight={500} size="lg" mt="md">
                {experience.title}
              </Text>
              <Text color="dimmed" size="sm" mt="xs">
                {experience.organization} | {experience.year}
              </Text>
              <Text size="sm" mt="md">
                {experience.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}