import { Stack, Button, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

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
            <Text as="strong">0</Text > - <Text as="strong">10</Text > de <Text as="strong">100</Text >
        </Box>
        <Stack direction="row" spacing="2">
            <PaginationItem index="1" isCurrent/>
            <PaginationItem index="2" />
            <PaginationItem index="3" />
        </Stack>
    </Stack>
  );
}
