import { Button, Group, Text } from '@mantine/core';
import Link from 'next/link';

function NavBar() {
  return (
    <>
      <Group position="center" bg="black" p={20} align="center" sx={{ width: '100%' }}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <div
            style={{
              width: 45.61,
              height: 38.46,
              left: 1.75,
              top: 0.87,
              position: 'absolute',
              background: 'linear-gradient(234deg, #1C99FE 0%, #7644FF 51%, #FD4766 100%)',
              border: '0.20px #1C99FE solid'
            }}
          ></div>
        </div>
        <Text fz={28} fw={700}>
          JPablo
        </Text>
        <Link href="/">
          <Text>Home</Text>
        </Link>
        <Link href="/about">
          <Text>About Me</Text>
        </Link>
        <Text>Projects</Text>
        <Text>My Skills</Text>
        <Text>Contact Me</Text>
        <Button radius={100} sx={{ backgroundColor: 'Gray', display: 'flex' }}></Button>
      </Group>
    </>
  );
}

export default NavBar;
