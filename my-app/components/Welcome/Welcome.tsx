import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import { BadgeCard } from '../BadgeCard/BadgeCard';
import React from 'react';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        {' '} Erling
        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'blue' }}>
          {" Holte"}
        </Text>
      </Title>
      <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Problemløser for fremtiden
      </Text>
    </>
  );
}
