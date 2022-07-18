import { Stack, Button, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage ?: number;
  currentPage ?: number;
  onPageChange : (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
  .map((_, index) => {
    return from + index + 1
  })
  .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters, registersPerPage = 10, currentPage = 1, onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage = currentPage > 1 
  ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  : []

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
  : []

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
        <Box>
            <Text as="strong">0</Text > - <Text as="strong">10</Text > de <Text as="strong">100</Text >
        </Box>
        <Stack direction="row" spacing="2">
            {currentPage > (1 + siblingsCount) && (
              <>
                <PaginationItem onPageChange={onPageChange} index={1} />
                {currentPage > (2 + siblingsCount) && (
                  <Text color="gray.300" width="8" textAlign="center">...</Text>
                )}
              </>
            )}

            {previousPage.length > 0 && previousPage.map(page => {
              return <PaginationItem onPageChange={onPageChange} key={page} index={page} />
            })}

            <PaginationItem onPageChange={onPageChange} index={currentPage} isCurrent/>

            {nextPages.length > 0 && nextPages.map(page => {
              return <PaginationItem onPageChange={onPageChange} key={page} index={page}/>
            })}

            {(currentPage + siblingsCount) < lastPage && (
              <>
                {(currentPage + 1 + siblingsCount) < lastPage && (
                  <Text color="gray.300" width="8" textAlign="center">...</Text>
                )}
                <PaginationItem onPageChange={onPageChange} index={lastPage} />
              </>
            )}
        </Stack>
    </Stack>
  );
}
