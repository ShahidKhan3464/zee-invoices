import React, { useState } from "react";


import { Button, Modal } from "antd";

import { SaveInfoModalContainer, CustomButtonFilledStyle } from "./style";

const Index = ({ openModal, closeModal }) => {
  const handleOk = () => {
    closeModal(false);
  };
  const handleCancel = () => {
    closeModal(false);
  };

  const CustomButton = ({ img, title, filled, bg, color }) => {
    return (
      <CustomButtonFilledStyle filled={filled} bg={bg} color={color}>
        <Button icon={img}>{title}</Button>
      </CustomButtonFilledStyle>
    );
  };
  return (
    <Modal
      open={openModal}
      onOk={handleOk}
      footer={false}
      width='619px'
      onCancel={handleCancel}>
      <SaveInfoModalContainer>
        <div className='infoModal_body'>
          <div className='infoModal_body_header'>
            <h1>Want to save info?</h1>
            <p>Keep and manage your invoices with ZAPTA Invoice Builder.</p>
          </div>
          <div className='infoModal_body_btns'>
            <div className='infoModal_body_btns_btn'>
              <CustomButton
                title='Continue with Email'
                img={<img src='images/mailIcon.svg' alt='mailIcon.svg' />}
                filled={false}
              />
            </div>
            <div className='infoModal_body_btns_btn'>
              <CustomButton
                title='Continue with Google'
                img={<img src='images/googleIcon.svg' alt='mailIcon.svg' />}
                filled={true}
                bg='#F4FAFF'
                color='#1E293B'
              />
            </div>
            <div className='infoModal_body_btns_btn'>
              <CustomButton
                title='Continue with Facebook'
                img={
                  <img src='images/facebookBtnIcon.svg' alt='mailIcon.svg' />
                }
                filled={true}
                bg='#475993'
                color='#FFFFFF'
              />
            </div>
            <div className='infoModal_body_btns_btn'>
              <CustomButton
                title='Continue with Apple'
                img={<img src='images/appleIcon.svg' alt='mailIcon.svg' />}
                filled={true}
                bg='#333333'
                color='#FFFFFF'
              />
            </div>
          </div>
          <div className='infoModal_body_footer'>
            <div className='infoModal_body_footer_divider'>
              <span></span>
              <p>OR</p>
              <span></span>
            </div>
            <div className='infoModal_body_footer_title'>
              <p>Skip this?</p>
              <h6>Just Download</h6>
            </div>
          </div>
        </div>
      </SaveInfoModalContainer>
    </Modal>
  );
};

export default Index;
