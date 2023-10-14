import React, { useState } from "react";
import Image from "next/image";

import CustomButton from "components/customButton";
import MobileNavBar from './mobileNavBar'

import { InvoiceBuilderNavStyle } from "./style";

import { secondaryColor } from "styles/global";
const Index = () => {

  const [mobileNav, setmobileNav] = useState(false)



  return (
    <InvoiceBuilderNavStyle>
      <div className='invoicebuilder_nav_content container'>
        <div className="invoicebuilder_nav_content_hamberg" >
          <picture>
            <img onClick={() => setmobileNav(true)} src="images/hamberg.svg" alt="hamberg" />
          </picture>
        </div>
        <div className='invoicebuilder_nav_content_logo'>
          <Image
            width='72'
            height='42'
            className='invoicebuilder_nav_content_logo_img'
            src='/images/zeeinvoicesLogo.svg'
            alt='zeeinvoicesLogo.svg'
          />
        </div>
        <div className='invoicebuilder_nav_content_btns'>
          <p>Invoicing Guide</p>
          <p>Help</p>
          <h6>Login</h6>
          <CustomButton 
            title='Sign Up'
            color='#FFFFFF'
            bg={secondaryColor}
            p={"10px 24px"}
            fs='16px'
            lh='19px'
          />
        </div>
      </div>
    
      <MobileNavBar setmobileNav={setmobileNav} mobileNav={mobileNav} />
    </InvoiceBuilderNavStyle>
  );
};

export default Index;
