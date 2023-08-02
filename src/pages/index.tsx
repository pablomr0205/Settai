import HeroHeader from '@/components/hero-header';
import LetsTalk from '@/components/lets-talk';
import Skills from '@/components/skills';
import Trust from '@/components/trust';
import { Box } from '@mantine/core';
import { memo } from 'react';

const Home = () => (
  <Box>
    <HeroHeader />
    <Trust />
    <Skills />
    <LetsTalk />
  </Box>
);

export default memo(Home);
