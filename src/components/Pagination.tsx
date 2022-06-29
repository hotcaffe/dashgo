import { Stack, Button, Box, Text } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
        <Box>
            <Text as="strong">0</Text >
             - 
            <Text as="strong">10</Text >
             de 
            <Text as="strong">100</Text >
        </Box>
        <Stack direction="row" spacing="2">
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                bgColor: "pink.500",
                cursor: "default",
                }}
            >
                1
            </Button>
        </Stack>
    </Stack>
  );
}
