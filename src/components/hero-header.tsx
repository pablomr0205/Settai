import { Box, Button, Group, Text, Center } from '@mantine/core';

const HeroHeader = () => (
  <Center>
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        width: 1453,
        height: 796
      }}
    >
      <Box
        sx={{
          backgroundColor: 'black',
          width: 700,
          height: 500,
          alignContent: 'left',
          alignItems: 'left'
        }}
      >
        <Group
          sx={{
            display: 'block',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Hi, I AM</Text>
          <Text fz={105} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            Gogrin
          </Text>
          <Text>I am Front-End Developer ready to take you business to a whole new level!</Text>
        </Group>
        <Button color="red" radius="xl" size="md">
          JUMP FOR A QUICK MEETING
        </Button>
      </Box>
    </Box>
  </Center>
);

export default HeroHeader;
