import { Box, Center, Title } from '@mantine/core';

const APHeroHeader = () => (
  <Center>
    <Box
      sx={{
        backgroundColor: '#141515',
        Width: '100%',
        height: '100%',
        opacity: 0.5,
        margin: 75,
        marginLeft: 0
      }}
    >
      <Title fz={30} color="white">
        Any Question?
      </Title>
    </Box>
  </Center>
);
export default APHeroHeader;
