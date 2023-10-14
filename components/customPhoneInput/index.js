import React from "react";
import ErrorMsg from "../errorMessage";
import { Field, ErrorMessage } from "formik";
import PhoneInput from 'react-phone-input-2';
import { CustomInputContainer } from "./style";

const InputField = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props

    return (
        <CustomInputContainer>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field, form, meta }) => {
                    return (
                        <PhoneInput
                            {...rest}
                            type="text"
                            // country='pk'
                            value={field.value}
                            inputProps={{
                                name: name,
                                // required: true,
                                autoFocus: true
                            }}
                            disabled={disabled}
                            className={className}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            onChange={phone => form.setFieldValue(name, phone)}
                        />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </CustomInputContainer>
    )
}

export default InputField