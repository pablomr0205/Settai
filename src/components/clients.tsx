import { Group, Text, Avatar, Center } from '@mantine/core';

function Clients() {
  return (
    <>
      <Center
        sx={{ margin: 'auto', marginTop: 50, paddingBottom: 50, backgroundColor: 'black', padding: 20, width: '100%' }}
      >
        <Group maw={500} sx={{ padding: 50 }}>
          <Avatar
            src={
              'https://media.licdn.com/dms/image/D4E03AQEzdU0NKXppEw/profile-displayphoto-shrink_200_200/0/1676951169938?e=1696464000&v=beta&t=Ga0MWvoXGkQqFxre3rA4GxpYiRct3NWOjhu9ddeualI'
            }
            alt="it's me"
          />

          <Text>"Santiaguin de Willmson(ceo Orix)"</Text>
          <Text maw={500}>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
            digital divide with additional clickthroughs from DevOps. Nanotechnology inmersion.{' '}
          </Text>
        </Group>
        <Group maw={500} sx={{ padding: 50 }}>
          <Avatar
            src="https://media.licdn.com/dms/image/C5603AQHAwOJ6hKBWNA/profile-displayphoto-shrink_200_200/0/1616379369171?e=1696464000&v=beta&t=eFlZOXkKWKSyLqHOoG8JeMKgCp1wFjJNcF9DH2ImPeg"
            alt="it's me"
          />
          <Text>"Carolin de Willmson(ceo Orix)"</Text>
          <Text maw={500}>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
            digital divide with additional clickthroughs from DevOps. Nanotechnology inmersion.{' '}
          </Text>
        </Group>
      </Center>
    </>
  );
}

export default Clients;
