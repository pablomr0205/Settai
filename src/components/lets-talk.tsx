import { Button, Group, Text, Center, Flex, BackgroundImage } from '@mantine/core';

const LetsTalk = () => (
  <BackgroundImage
    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    radius="xs"
    style={{
      width: '100%',
      height: 600,
      maxWidth: 1400
    }}
  >
    <Center maw={1800} mx="auto">
      <Flex
        sx={{
          margin: 0,
          width: 1700,
          height: 796,
          justifyContent: 'end',
          paddingLeft: 1000,
          borderColor: 'red'
        }}
      >
        <Flex
          // flex-direction={'column'}
          sx={{
            backgroundColor: '#18181b',
            width: 500,
            height: 500,
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 100,
            marginTop: 27,
            paddingLeft: 150,
            borderColor: 'red'
          }}
        >
          <Group sx={{ width: '600px' }}>
            <Text fz={105} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
              Let's Talk
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quam illum soluta voluptatibus modi
              doloremque, nulla velit cupiditate accusamus perferendis autem quidem laborum alias earum. Mollitia sed
              tempora reprehenderit cumque.
            </Text>
          </Group>
          <Button
            color="red"
            radius="xl"
            size="xl"
            maw={250}
            fz={12}
            sx={{ marginTop: 30, backgroundColor: '#d95067', padding: 5, height: 40 }}
          >
            JUMP FOR A QUICK MEETING
          </Button>
        </Flex>
      </Flex>
    </Center>
  </BackgroundImage>
);

export default LetsTalk;
