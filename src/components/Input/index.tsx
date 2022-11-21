import React from "react"
import { Controller } from "react-hook-form"
import { ErrorText, IconContainer, InputContainer, InputText } from "./style"
import { IInput } from "./types"

export const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
    return(<>
        <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field: {value, onChange} }) =>  <InputText value={value} onChange={onChange} {...rest} />}
            />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>)
}