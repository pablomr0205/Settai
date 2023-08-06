import { Box, Button, Text, Center } from '@mantine/core';

const HeroHeader = () => (
  <Center>
    <Box style={{ width: '100%', height: '100%', background: '#C0C3CC', maxWidth: 1400 }}>
      <Box
        sx={{
          backgroundColor: 'black',
          width: 1059,
          height: 500,
          margin: 20
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            transformOrigin: '0 0',
            background: '#141515',
            paddingTop: 80,
            paddingLeft: 20,
            textAlign: 'center'
          }}
        >
          <Text>Hi, I AM</Text>
          <Text fz={105} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            Gogrin
          </Text>
          <Text>I am Front-End Developer ready to take you business to a whole new level!</Text>
          <Button color="red" radius="xl" size="md" sx={{ marginTop: 80 }}>
            JUMP FOR A QUICK MEETING
          </Button>
        </div>
      </Box>
    </Box>
  </Center>
);

export default HeroHeader;
