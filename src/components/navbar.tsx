import React from 'react';
import { Group, Text } from '@mantine/core';
import Link from 'next/link';

function NavBar() {
  return (
    <Group position="center" bg="black" p={20} m={20} align="center">
      <Link href="/">
        <Text>Home</Text>
      </Link>
      <Link href="/about">
        <Text>About Me</Text>
      </Link>
      <Text>Projects</Text>
      <Text>My Skills</Text>
      <Text>Contact Me</Text>
    </Group>
  );
}

export default NavBar;
