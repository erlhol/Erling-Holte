import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import classes from '../FeaturesGrid.module.css';
import React from "react";
import MyTimeline from "./MyTimeline";

export default function Education() {
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Utdanning</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>

        </Text>
      </Container>

      <MyTimeline />
    </Container>
  );
}