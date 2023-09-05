import { Box, Button, Text, Center, BackgroundImage } from '@mantine/core';

const HeroHeader = () => (
  <Center>
    <BackgroundImage
      src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
      radius="xs"
      style={{
        width: '100%',
        height: 650,
        maxWidth: 1400
      }}
    >
      <Box
        sx={{
          backgroundColor: '#18181b',
          maxWidth: 650,
          height: 500,
          margin: 75,
          marginLeft: 0
        }}
      >
        <Box
          style={{
            width: '100%',
            height: '100%',
            transformOrigin: '0 0',
            background: '##18181b',
            paddingTop: 80,
            // paddingLeft: 20,
            textAlign: 'left',
            marginTop: 45
          }}
        >
          <Text fz={18}>Hi, I AM</Text>
          <Text fz={105} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            Gogrin
          </Text>
          <Text fz={18}>I am Front-End Developer ready to take you business to a whole new level!</Text>
          <Button color="red" radius="xl" size="md" sx={{ marginTop: 80 }}>
            JUMP FOR A QUICK MEETING
          </Button>
        </Box>
      </Box>
    </BackgroundImage>
  </Center>
);

export default HeroHeader;
