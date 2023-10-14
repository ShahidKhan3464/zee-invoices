import React from "react";
import Input from "./customInput";
import PhoneInput from './customPhoneInput';
import CountrySelect from './customCountrySelect';

const Index = (props) => {
    const { control, ...rest } = props

    switch (control) {
        case "input":
            return <Input {...rest} />
        case "phoneInput":
            return <PhoneInput {...rest} />
        case "countrySelect":
            return <CountrySelect {...rest} />
        default:
            return null
    }
}

export default Index