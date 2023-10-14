import * as Yup from "yup";
import Footer from '@/footer';
import Image from 'next/image';
import { Formik, Form } from "formik";
import FormControl from "@/formControl";
import React, { useState } from 'react';
import { StyledBox, PrimaryButton } from 'styles/global';
import CircularProgress from '@mui/material/CircularProgress';

const Index = () => {
    const [loading, setLoading] = useState(false)

    const initialValues = {
        newPassword: "",
        confirmNewPassword: ""
    }

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <Image
                            alt='keys'
                            width={46}
                            height={70}
                            src='/images/keys.svg'
                        />
                        <h2>Reset password</h2>
                        <p>
                            Create a New password for your account.
                        </p>
                    </div>

                    <div className='content_form'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        // onSubmit={handleSubmit}
                        >
                            {(formik) => {
                                return (
                                    <Form
                                        noValidate
                                        name='basic'
                                        autoComplete='off'
                                    // onFinish={formik.handleSubmit}
                                    >
                                        <div className='field-control'>
                                            <FormControl
                                                label=''
                                                type='text'
                                                control='input'
                                                name='newPassword'
                                                placeholder='Enter New Password'
                                                className={
                                                    formik.errors.newPassword && formik.touched.newPassword
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className='field-control'>
                                            <FormControl
                                                label=''
                                                type='text'
                                                control='input'
                                                name='confirmNewPassword'
                                                placeholder='Confirm New Password'
                                                className={
                                                    formik.errors.confirmNewPassword && formik.touched.confirmNewPassword
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className="btn-container">
                                            <PrimaryButton
                                                type='submit'
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <CircularProgress size={22} color='inherit' />
                                                ) : (
                                                    <span>Reset Password</span>
                                                )}
                                            </PrimaryButton>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default Index
const validationSchema = Yup.object({
    newPassword: Yup.string()
        .required('This field is required')
        .min(8, 'Password must contain min 8 characters')
        .max(20, 'Password can have max 20 characters'),
    confirmNewPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});