import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Input} from "src/components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Por favor, insira a sua senha!')
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const {errors} = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
  }
  
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" error={errors.email} {...register('email')} />
          <Input name="password" label="Senha" type="password" error={errors.password} {...register('password')}/>
        </Stack>
        <Button colorScheme="pink" type="submit" mt="6" size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
