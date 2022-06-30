import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Raphael Fusco</Text>
          <Text color="gray.300" fontSize="small">
            raphaelfusco.rar@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Raphael Fusco"
        src="https://github.com/hotcaffe.png"
      />
    </Flex>
  );
}
