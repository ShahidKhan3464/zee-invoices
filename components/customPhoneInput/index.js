import React from "react";
import { Field, ErrorMessage } from "formik";
import PhoneInput from 'react-phone-input-2'
import { CustomInputContainer } from "./style";
import ErrorMsg from "../errorMessage";

const InputField = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props;
    return (
        <CustomInputContainer>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field, form, meta }) => {
                    return (
                        <PhoneInput
                            country='pk'
                            inputProps={{
                                name: name,
                                required: true,
                                autoFocus: true
                            }}
                            disabled={disabled}
                            className={className}
                            type="text"
                            {...rest}
                            onChange={phone => form.setFieldValue(name, phone)}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            value={field.value}
                        />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </CustomInputContainer>
    );
};

export default InputField;
