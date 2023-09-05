import {
  createStyles,
  Text,
  Box,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  Divider
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconHome,
  IconAt,
  IconPhone
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 500,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.colorScheme][6]} 50%, ${
      theme.colors[theme.colorScheme][5]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    paddingRight: 200,
    paddingLeft: 300,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.white,
    lineHeight: 1
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%'
    }
  },

  form: {
    backgroundColor: theme.colorScheme,
    padding: theme.spacing.sm,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    maxWidth: 800
  },

  social: {
    color: theme.colorScheme,

    '&:hover': {
      color: theme.colors[theme.primaryColor][7]
    }
  },

  input: {
    backgroundColor: theme.colors.dark[6],
    borderColor: theme.colors.gray[9],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[7]
    }
  },

  inputLabel: {
    color: theme.white
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][5]
  }
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Box>
          <Text fz={20} fw={700} variant="gradient" gradient={{ from: '#FD4766', to: 'blue', deg: 45 }}>
            #CONTACT INFO
          </Text>
          <Title className={classes.title}>Any Question?</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Methods and techniques to taking raw daa - mining for insights and years of expierence will.
          </Text>
          <Text display={'inline-flex'} sx={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <IconHome color="#FD4766" />
            Ta-134/A,Guishan Badda Link Rd, Nya 10982 USA
          </Text>
          <Divider my="lg" variant="solid" color="red" maw={400} />
          <Text display={'inline-flex'} sx={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <IconAt color="#FD4766" />
            RasalinaWilliam@gmail.com <br /> infoweb@gmail.com
          </Text>
          <Divider my="lg" variant="solid" color="red" maw={400} />
          <br />
          <Text display={'inline-flex'} sx={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <IconPhone color="#FD4766" />
            +08 987878773 345 <br /> +887998 67563 345
          </Text>

          <Group mt="xl">{icons}</Group>
        </Box>
        <div className={classes.form}>
          <Text fz={20} fw={700} variant="gradient" gradient={{ from: '#FD4766', to: 'blue', deg: 45 }}>
            #GET IN TOUCH
          </Text>
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            mt="md"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
