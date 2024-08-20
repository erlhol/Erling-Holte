import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import classes from '../FeaturesGrid.module.css';
import React from "react";

export default function Education() {
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Education</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Write about the technologies I have learned, OOP and functional programming. List the programming languages I have learned and the two exchange semesters I have been to. Link to LeetCode and Kattis
        </Text>
      </Container>

      <Text>Insert some text here</Text>
    </Container>
  );
}