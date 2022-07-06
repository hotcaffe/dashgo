import {forwardRef, ForwardRefRenderFunction} from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label: string;
    type: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, type, ...rest}, ref) => {
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
                ref={ref}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)