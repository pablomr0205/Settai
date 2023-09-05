import { Box, Grid, Group, Text, Divider, Image, Center } from '@mantine/core';

function Trust() {
  return (
    <>
      <Center>
        <Grid justify="center">
          <Grid.Col span={4} display={'flex'} sx={{ padding: 40, margin: 40 }}>
            <Group>
              <Text sx={{ fontFamily: 'Poppins', fontSize: 45, fontWeight: 700 }}>
                I bring trusted solutions for your business
              </Text>
              <Text>
                We help our client succeed by creating identities, digial expierences, and printmaterials that
                communicate clearly, achieve marketing goals, and look fantastic.
              </Text>
              <Text>
                There are many variations of passages of lorem Ipsum available, but the majority have suffered
                alteration in some form, bu inected humor.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={2} sx={{ padding: 10, margin: 30 }}>
            <Box sx={{ width: '100%', aspectRatio: '1/1' }}>
              <Image
                maw={240}
                mx="auto"
                radius="xs"
                fit="cover"
                src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Random image"
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={2} sx={{ padding: 20, margin: 30 }}>
            <Box sx={{ width: '100%', aspectRatio: '1/1' }}>
              <Image
                maw={240}
                mx="auto"
                radius="xs"
                src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Random image"
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Center>
      <Divider my="lg" variant="solid" color="red" maw={1400} sx={{ margin: 'auto' }} />
    </>
  );
}

export default Trust;
