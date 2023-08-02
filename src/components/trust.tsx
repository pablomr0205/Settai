import { Box, Grid, Group, Text, Divider } from '@mantine/core';

function Trust() {
  return (
    <>
      <Grid justify="center">
        <Grid.Col span={2} sx={{ padding: 20, margin: 20 }}>
          <Group>
            <Text sx={{ fontFamily: 'Poppins', fontSize: 45, fontWeight: 700 }}>
              I bring trusted solutions for your business
            </Text>
            <Text>
              We help our client succeed by creating identities, digial expierences, and printmaterials that communicate
              clearly, achieve marketing goals, and look fantastic.
            </Text>
            <Text>
              There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration
              in some form, bu inected humor.
            </Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={2} sx={{ padding: 20, margin: 20 }}>
          <Box sx={{ backgroundColor: 'white', padding: 20, margin: 20, height: 400, width: 400 }}></Box>
        </Grid.Col>
        <Grid.Col span={2} sx={{ padding: 20, margin: 20 }}>
          <Box sx={{ backgroundColor: 'white', padding: 20, margin: 20, height: 400, width: 400 }}></Box>
        </Grid.Col>
      </Grid>
      <Divider my="lg" variant="solid" color="white" />
    </>
  );
}

export default Trust;
