import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import {Input} from "src/components/Form/Input";
import Sidebar from "src/components/Sidebar";
import Header from "src/components/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigátorio').email('E-mail inválido'),
    password: yup.string().required('Por favor, insira a sua senha!').min(6, 'A senha deve possuir 6 caracteres no mínimo'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas devem ser iguais')
})

export default function UserCreate(){
   const {register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
   })

   const {errors} = formState

   const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
    console.log(values)
   }

    return (
    <Box>
        <Header/>
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />
            <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit(handleCreateUser)}>
                <Heading size="lg" fontWeight="normal">Criar usuario</Heading>
                <Divider my="6" borderColor="gray.700"/>
                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                        <Input name="name" type="name" label="Nome completo" error={errors.name} {...register('name')}/>
                        <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')}/>
                    </SimpleGrid>

                    <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                        <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}/>
                        <Input name="password_confirmation" type="password" label="Confirmação da senha" error={errors.password_confirmation} {...register('password_confirmation')}/>
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Link href="/users" passHref>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                        <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    </Box>
   ) 
}