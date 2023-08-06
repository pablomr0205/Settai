import { Box, Button, Group, Text, Center } from '@mantine/core';

const LetsTalk = () => (
  <Center maw={1800} mx="auto">
    <Box
      sx={{
        maxWidth: 1400,
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        width: 1453,
        height: 796,
        left: 2000
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
          <Text fz={105} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            Let's Talk
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quam illum soluta voluptatibus modi
            doloremque, nulla velit cupiditate accusamus perferendis autem quidem laborum alias earum. Mollitia sed
            tempora reprehenderit cumque.
          </Text>
        </Group>
        <Button color="red" radius="xl" size="md">
          JUMP FOR A QUICK MEETING
        </Button>
      </Box>
    </Box>
  </Center>
);

export default LetsTalk;
