import { Button, Flex, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex justify="center" align="center" w="100vw" h="100vh">
      <Flex
        bg="gray.800"
        padding="6"
        borderRadius="10"
        p="8"
        maxWidth="360"
        w="100%"
        as="form"
        flexDir="column"
      >
        <Stack spacing="4">
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            name="email"
            type="email"
            variant="filled"
            bgColor="gray.900"
            focusBorderColor="pink.500"
            _hover={{
              bg: "gray.900",
            }}
            size="lg"
          />
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            name="password"
            type="password"
            variant="filled"
            bg="gray.900"
            focusBorderColor="pink.500"
            _hover={{
              bg: "gray.900",
            }}
            size="lg"
          />
        </Stack>
        <Button colorScheme="pink" type="submit" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
