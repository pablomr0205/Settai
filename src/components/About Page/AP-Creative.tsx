import { Box, Button, Text, Grid, Center, ThemeIcon, Title } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

const APCreative = () => (
  <Box sx={{ backgroundColor: 'white' }}>
    <Grid justify="center">
      <Grid.Col span={4}>
        <Box>
          <Title order={1}>Gogrin</Title>
          <Title order={1}>Creative</Title>
          <Text sx={{ flexWrap: 'nowrap' }}>Digital Solution for your Business</Text>
          <Text maw={500}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias vitae aut delectus quisquam laudantium optio
            sapiente harum voluptate suscipit itaque, impedit temporibus iure magnam, earum hic doloremque aliquam
            dolorem recusandae.
          </Text>
          <Text maw={500} sx={{ margin: '20' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cum. Esse ducimus commodi accusamus
            culpa tempora quisquam iure id obcaecati doloremque? Quisquam, fugit? Aperiam accusantium, vel doloremque
            perspiciatis quae porro.
          </Text>
          <Button sx={{ marginTop: '40', paddingTop: '40' }}>Get in Touch!</Button>
        </Box>
      </Grid.Col>
      <Grid.Col span={4}>
        <Box>
          <Box
            sx={{
              width: '15%',
              height: '300px',
              position: 'absolute',
              zIndex: 1,
              paddingTop: 80,
              textAlign: 'left',
              marginTop: 30,
              marginLeft: 120,
              transform: 'rotate(6.86deg)',
              transformOrigin: '0 0',
              backgroundColor: '#1C99FE'
            }}
          />
          <Box>
            <Box
              sx={{
                width: '15%',
                height: '300px',
                position: 'absolute',
                zIndex: 3,
                paddingTop: 80,
                marginLeft: 100,
                textAlign: 'left',
                marginTop: 45,
                backgroundColor: '#C0C3CC'
              }}
            />
          </Box>
        </Box>
      </Grid.Col>
    </Grid>
    <Center maw={1400} sx={{ margin: 'auto', paddingTop: 40, paddingBottom: 50 }}>
      <Grid justify="center" sx={{ width: '100%', textAlign: 'center', paddingTop: 80 }}>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="#FD4766">
            <IconPhoto />
          </ThemeIcon>
          <Text fz={30} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            329+
          </Text>
          <Text color="black" fz={14}>
            Satisfied Customers
          </Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="#FD4766">
            <IconPhoto />
          </ThemeIcon>
          <Text fz={30} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            98+
          </Text>
          <Text color="black" fz={14}>
            Complete Projects
          </Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="#FD4766">
            <IconPhoto />
          </ThemeIcon>
          <Text fz={30} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            149+
          </Text>
          <Text color="black" fz={14}>
            Win Global Award
          </Text>
        </Grid.Col>
        <Grid.Col md={1} lg={2} p={20} m={20}>
          <ThemeIcon color="#FD4766">
            <IconPhoto />
          </ThemeIcon>
          <Text fz={30} fw={700} variant="gradient" gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}>
            208+
          </Text>
          <Text color="black" fz={14}>
            Cup of Coffee
          </Text>
        </Grid.Col>
      </Grid>
    </Center>
  </Box>
);

export default APCreative;
