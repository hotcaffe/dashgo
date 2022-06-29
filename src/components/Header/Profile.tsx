import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Raphael Fusco</Text>
        <Text color="gray.300" fontSize="small">
          raphaelfusco.rar@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Raphael Fusco"
        src="https://github.com/hotcaffe.png"
      />
    </Flex>
  );
}
