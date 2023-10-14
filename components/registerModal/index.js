import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal, Input, Checkbox, Button } from "antd";
import { RegisterStyled } from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
const Index = ({ openModal, closeModal }) => {
  const handleCancel = () => {
    closeModal(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()

        .max(15, "Must be 15 characters or less")

        .required("Required"),

      lastName: Yup.string()

        .max(20, "Must be 20 characters or less")

        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal
      open={openModal}
      width='619px'
      footer={false}
      onCancel={handleCancel}>
      <RegisterStyled>
        <div className='registerStyled'>
          <div className='registerStyled_header'>
            <h1>Create Free Account</h1>
            <p>Keep and manage your invoices with ZAPTA Invoice Builder.</p>
          </div>
          <div className='registerStyled_form'>
            <form onSubmit={formik.handleSubmit}>
              <div className='registerStyled_form_input'>
                <Input
                  id='firstName'
                  type='text'
                  placeholder='Email Address'
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className='registerStyled_form_input'>
                <Input
                  id='lastName'
                  type='text'
                  placeholder='Create Password'
                  {...formik.getFieldProps("lastName")}
                />

                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </div>
              <div className='registerStyled_form_input'>
                <Input
                  id='email'
                  type='email'
                  placeholder='Confrim Password'
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className='registerStyled_form_checkbox'>
                <Checkbox>
                  I agree with to{" "}
                  <span className='terms_condition'>terms & conditions</span> on
                  ZAPTA Invoice Builder
                </Checkbox>
              </div>
              <div className='registerStyled_form_btn'>
                <Button htmlType='submit'>Sign Up</Button>
              </div>
            </form>
          </div>
          <div className='registerStyled_footer'>
            <div className='registerStyled_footer_divider'>
              <span></span>
              <p>Or Continue With</p>
              <span></span>
            </div>
            <div className='registerStyled_footer_socialIcons'>
                          <img src='images/googleFilledIcon.svg' alt="googleFilledIcon.svg" />
                          <img src='images/facebookFilledIcon.svg' alt="facebookFilledIcon.svg" />
                          <img src='images/appleFilledIcon.svg' alt="appleFilledIcon.svg" />
            </div>
            <div className='registerStyled_footer_title'>
              <p>
                Already have an account?<span>Login</span>
              </p>
            </div>
          </div>
        </div>
      </RegisterStyled>
    </Modal>
  );
};

export default Index;
