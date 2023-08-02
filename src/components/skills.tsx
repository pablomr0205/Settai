import { Center, Grid, Text } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Skills() {
  return (
    <Center maw={1400} mx="auto">
      <Grid>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon variant="default" color="grape">
            <IconPhoto />
          </ThemeIcon>
          <Text pt={20} pb={20}>
            Web Development
          </Text>
          <Text>Methods and techniques to taking raw data -mining for insights and years of experience will.</Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon variant="default" color="grape">
            <IconPhoto />
          </ThemeIcon>
          <Text pt={20} pb={20}>
            Ui/Ux Design
          </Text>
          <Text>Methods and techniques to taking raw data -mining for insights and years of experience will.</Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon variant="default" color="grape">
            <IconPhoto />
          </ThemeIcon>
          <Text pt={20} pb={20}>
            Branding Design
          </Text>
          <Text>Methods and techniques to taking raw data -mining for insights and years of experience will.</Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon variant="default" color="grape">
            <IconPhoto />
          </ThemeIcon>
          <Text pt={20} pb={20}>
            Product Design
          </Text>
          <Text>Methods and techniques to taking raw data -mining for insights and years of experience will.</Text>
        </Grid.Col>
      </Grid>
    </Center>
  );
}
export default Skills;
