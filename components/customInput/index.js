import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../errorMessage";
import { Input } from "antd";
import { CustomInputContainer } from "./style";

const InputField = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props;
    return (
        <CustomInputContainer>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field }) => (
                    <Input
                        disabled={disabled}
                        prefix={prefix}
                        className={className}
                        maxLength={maxLength}
                        {...rest}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        {...field}
                    />
                )}
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </CustomInputContainer>
    );
};

export default InputField;
