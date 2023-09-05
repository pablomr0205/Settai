import { CardsCarousel } from '@/components/carousel';
import Clients from '@/components/clients';
import HeroHeader from '@/components/hero-header';
import LetsTalk from '@/components/lets-talk';
import Skills from '@/components/skills';
import Trust from '@/components/trust';
import { Box } from '@mantine/core';
import { memo } from 'react';
import BigText from '@/components/big-text';

const Home = () => (
  <Box>
    <HeroHeader />
    <Trust />
    <Skills />
    <LetsTalk />
    <CardsCarousel />
    <Clients />
    <BigText />
  </Box>
);

export default memo(Home);
