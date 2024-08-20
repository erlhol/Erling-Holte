'use client';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';
import React from 'react';

interface BadgeProps {
  image: string;
  title: React.ReactNode;
  organization: string;
  year: string;
  description: React.ReactNode;
  link: string;
  badges: { emoji: string; label: string }[];
}

export function BadgeCard({ image, title, organization, year, description, link, badges }: BadgeProps) {

  const features = badges?.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {organization}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Temaer
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button onClick={() => window.open(link, '_blank')} radius="md" style={{ flex: 1 }}>
          Lær mer
        </Button>
      </Group>
    </Card>
  );
}
