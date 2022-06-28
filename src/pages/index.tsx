import { Button, Flex, Stack } from "@chakra-ui/react";
import Input from "src/Form/Input";

export default function SignIn() {
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
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button colorScheme="pink" type="submit" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
