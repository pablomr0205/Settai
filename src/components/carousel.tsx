import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Center, Group, Box } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(320),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBlockStart: 30,
    marginBlockEnd: 20
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase'
  },

  subtitle: {
    color: theme.colors.red,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(16)
  },

  nameProject: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(32),
    textDecoration: 'underline'
  }
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  subtitle: string;
  nameProject: string;
}

function Card({ image, title, category, subtitle, nameProject }: CardProps) {
  const { classes } = useStyles();

  return (
    <Box>
      <Paper shadow="md" p="xl" radius="md" sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Read article
        </Button>
      </Paper>
      <Text sx={{ fontSize: 12, color: '#FD4766' }}>{subtitle}</Text>
      <Text sx={{ paddingTop: 20 }}>{nameProject}</Text>
    </Box>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
    subtitle: '#Web Design',
    nameProject: 'Minimal product showcase'
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
    subtitle: 'Branding Design',
    nameProject: 'Trendy Minimal Headphone Branding'
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
    subtitle: '#Architechture',
    nameProject: 'Architechure Design by Rasalna'
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
    subtitle: 'Branding Design',
    nameProject: 'Trendy Minimal Headphone Branding'
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
    subtitle: 'Branding Design',
    nameProject: 'Trendy Minimal Headphone Branding'
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
    subtitle: 'Branding Design',
    nameProject: 'Trendy Minimal Headphone Branding'
  }
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Group sx={{ align: 'center' }}>
        <Text sx={{ marginTop: 60, marginLeft: 370, fontSize: 45, fontWeight: 700, fontfamily: 'Poppins' }}>
          Latest work
        </Text>
      </Group>
      <Center sx={{ marginLeft: '200' }}>
        <Carousel
          maw={1100}
          slideSize="33%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '30%', slideGap: rem(8) }]}
          slideGap="md"
          align="start"
          slidesToScroll={mobile ? 1 : 2}
        >
          {slides}
        </Carousel>
      </Center>
      <Center>
        <Button color="red" radius="xl" size="sm" sx={{ marginTop: 80 }}>
          VIEW ALL PROJECTS
        </Button>
      </Center>
    </>
  );
}
