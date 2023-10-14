import React from "react";
import { Input } from "antd";
import ErrorMsg from "../errorMessage";
import { Field, ErrorMessage } from "formik";
import { CustomInputContainer } from "./style";

const Index = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props

    return (
        <CustomInputContainer>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field }) => (
                    <Input
                        {...rest}
                        {...field}
                        prefix={prefix}
                        disabled={disabled}
                        className={className}
                        maxLength={maxLength}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                    />
                )}
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </CustomInputContainer>
    )
}

export default Index