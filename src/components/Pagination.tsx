import { Stack, Button, Box } from "@chakra-ui/react";

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
            <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
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
