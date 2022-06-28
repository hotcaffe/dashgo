import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label: string;
    type: string;
}

export default function Input({name, label, type, ...rest}){
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                type={type}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{
                    bg: "gray.900"
                }}
                {...rest}
            />
        </FormControl>
    )
}