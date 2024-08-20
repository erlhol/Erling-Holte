import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import classes from '../FeaturesGrid.module.css';
import React from "react";

export default function Education() {
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Experience</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you'll see a Golbat that's missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>

      <Text>Insert some text here</Text>
    </Container>
  );
}