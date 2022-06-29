import {Text} from '@chakra-ui/react';

export default function Logo() {
  return (
    <Text fontSize="3xl" w="64" fontWeight="bold" letterSpacing="tight">
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
