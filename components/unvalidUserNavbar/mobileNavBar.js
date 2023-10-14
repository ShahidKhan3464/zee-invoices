import React from "react";
import { Drawer } from "antd";

import CustomButton from "components/customButton";
import { secondaryColor } from "styles/global";

import { InvoiceMobileNavstyle, MobileDrawerAntdCustomize } from "./style";

const Index = ({ mobileNav, setmobileNav }) => {
  const onClose = () => {
    setmobileNav(false);
  };
  return (
    <>
      <Drawer
        height='282'
        className='customizemobileDrawer'
        size='small'
        placement='top'
        onClose={onClose}
        open={mobileNav}>
        <InvoiceMobileNavstyle>
          <div className='invoice_mobile_nav_content'>
            <div className='invoice_mobile_nav_content_logo'>
              <picture>
                <img src='images/invoiceBuilderMobileLogo.png' alt='logo' />
              </picture>
            </div>
            <div className='invoice_mobile_nav_content_links'>
              <p>Invoicing Guide</p>
              <p>Help</p>
              <div className='invoice_mobile_nav_content_links_btns'>
                <CustomButton
                  title='Sign Up'
                  color='#FFFFFF'
                  bg={secondaryColor}
                  fs='16px'
                  lh='19px'
                  width='100%'
                />
                <CustomButton
                  title='Login'
                  color={secondaryColor}
                  bg='#FFFFFF'
                  border='2px solid #333333'
                  fs='16px'
                  lh='19px'
                  width='100%'
                />
              </div>
            </div>
          </div>
        </InvoiceMobileNavstyle>
      </Drawer>
    </>
  );
};

export default Index;
