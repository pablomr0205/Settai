import { Center, Grid, Text, ThemeIcon } from '@mantine/core';
import { IconBrowser, IconBoxMultiple, IconBadgeTm, IconBuildingStore } from '@tabler/icons-react';

function Skills() {
  return (
    <Center maw={1400} sx={{ margin: 'auto', paddingTop: 40, paddingBottom: 50 }}>
      <Grid justify="center">
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="transparent">
            <IconBrowser />
          </ThemeIcon>
          <Text pt={20} pb={20}>
            Web Development
          </Text>
          <Text>Methods and techniques to taking raw data -mining for insights and years of experience will.</Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="transparent">
            <IconBoxMultiple />
          </ThemeIcon>
          <Text pt={20} pb={20}>
            Ui/Ux Design
          </Text>
          <Text>Methods and techniques to taking raw data -mining for insights and years of experience will.</Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="transparent">
            <IconBadgeTm />
          </ThemeIcon>
          <Text pt={20} pb={20}>
            Branding Design
          </Text>
          <Text>Methods and techniques to taking raw data -mining for insights and years of experience will.</Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="transparent">
            <IconBuildingStore />
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
