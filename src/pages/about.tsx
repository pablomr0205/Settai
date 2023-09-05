import APCreative from '@/components/About Page/AP-Creative';
import APHeroHeader from '@/components/About Page/AP-Hero-header';
import { Box } from '@mantine/core';
import { memo } from 'react';

const About = () => (
  <Box>
    <APHeroHeader />
    <APCreative />
  </Box>
);

export default memo(About);
