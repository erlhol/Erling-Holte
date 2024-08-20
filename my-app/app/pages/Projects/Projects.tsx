import { BadgeCard } from "../../../components/BadgeCard/BadgeCard";
import { Container, Title, Text, SimpleGrid } from "@mantine/core";
import classes from '../FeaturesGrid.module.css';
import React from "react";

const myProjects = [
  {
    image: '/images/Emneplanleggern.jpg',
    title: 'EmnePlanleggern',
    organization: 'Eget prosjekt',
    year: '2023',
    description: 'Et personlig prosjekt for å planlegge emner ved universitetet. En brukervennlig applikasjon som hjelper studenter med å organisere og planlegge studieemner. Applikasjonen er laget i React og henter data fra UiO sine nettsider.',
    link: 'https://github.com/erlhol/EmnePlanleggern',
    badges: [
      { emoji: '🛠️', label: 'Utvikling' },
      { emoji: '💻', label: 'Webapplikasjon' },
      { emoji: '🎓', label: 'Student' }
    ],
  },
  {
    image: '/images/IN2000.jpg',
    title: 'IN2000 - Software Engineering med prosjektarbeid',
    organization: 'Universitetet i Oslo',
    year: '2022',
    description: 'Et prosjekt gjennomført i forbindelse med kurset IN2000, som fokuserer på software engineering. Prosjektet Oscyclo handler om å utvikle en programvareløsning med fokus på sykkeldeling. Prosjektet resulterte i en app for Android og tilhørende rapport',
    link: 'https://github.com/erlhol/Oscyclo-IN2000',
    badges: [
      { emoji: '🛠️', label: 'Utvikling' },
      { emoji: '🚴‍♂️', label: 'Sykkeldeling' },
      { emoji: '📚', label: 'Akademisk prosjekt' }
    ],
  },
  {
    image: 'https://www.uio.no/studier/emner/matnat/ifi/IN1060/v21/prosjekter-var-2021/dorstokkmila/dorstokkmila.jpg',
    title: 'IN1060 - Bruksorientert design',
    organization: 'Universitetet i Oslo',
    year: '2021',
    description: 'En designutfordring fra kurset IN1060, hvor vi jobbet med å designe noe for en "gamer" for å komme seg ut i aktivitet. Prosjektet "Dørstokkmila" handler om å senke terskelen for å komme seg ut i fysisk aktivitet. Prosjektet resulterte i en høyoppløslig fysisk prototype og tilhørende rapport',
    link: 'https://www.uio.no/studier/emner/matnat/ifi/IN1060/v21/prosjekter-var-2021/dorstokkmila/',
    badges: [
      { emoji: '🎨', label: 'Design' },
      { emoji: '🧑‍🤝‍🧑', label: 'Brukeropplevelse' },
      { emoji: '🏃‍♂️', label: 'Fysisk aktivitet' }
    ],
  },
];

export default function Projects() {
  const features = myProjects.map((feature, index) => <BadgeCard {...feature} key={index} />);
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Mine prosjekter</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>

        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
