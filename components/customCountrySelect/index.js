import React, { useState } from "react";
import ErrorMsg from "../errorMessage";
import { Field, ErrorMessage } from "formik";
import { CustomInputContainer } from "./style";
import ReactFlagsSelect from "react-flags-select";

const index = (props) => {
  const {
    label,
    prefix,
    defaultValue,
    maxLength,
    disabled,
    placeholder,
    className,
    name,
    ...rest
  } = props;

  return (
    <CustomInputContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field, form, meta }) => {
          return (
            <ReactFlagsSelect
              {...rest}
              {...field}
              searchable
              className={className}
              selected={field.value}
              placeholder={placeholder}
              onSelect={(code) => form.setFieldValue(name, code)}
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomInputContainer>
  )
}

export default index