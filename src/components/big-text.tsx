import { Box, Button, Center, Text } from '@mantine/core';

const BigText = () => (
  <Box maw={1400} sx={{ margin: 'auto' }}>
    <Text
      fz={80}
      fw={700}
      ta={'center'}
      sx={{ margin: 80 }}
      variant="gradient"
      gradient={{ from: '#1C99FE', to: 'Red', deg: 45 }}
    >
      Enough Talk, Lets Build Something Unique & Creative{' '}
    </Text>
    <Center>
      <Button color="red" radius="xl" size="md" sx={{ margin: 'auto', marginBottom: 80 }}>
        JUMP FOR A MEETING
      </Button>
    </Center>
  </Box>
);

export default BigText;
