import {forwardRef, ForwardRefRenderFunction} from 'react';
import { FieldErrors } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label: string;
    type: string;
    error?: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error, type, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>
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
            {!!error && (
                <FormErrorMessage>
                    {`${error.message}`}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)