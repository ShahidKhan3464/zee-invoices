import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StyledNavbar } from "./style";
import { useRouter } from 'next/router';
import { primaryColor } from 'styles/global';
import CustomButton from "components/customButton";

const Index = () => {
  const route = useRouter()
  const [navbarBackground, setNavbarBackground] = useState(false)

  const navigateHandler = () => {
    route.push('/generate-invoice')
  }

  const changeNavColor = () => {
    if (window.scrollY > 100) {
      setNavbarBackground(true)
    }
    else {
      setNavbarBackground(false)
    }
  }

  useEffect(() => {
    changeNavColor()
    window.addEventListener("scroll", changeNavColor)
  })

  return (
    <StyledNavbar navbarBackground={navbarBackground}>
      <div className='navbarContent container'>
        <div className='navbar_logo'>
          <Image
            width='96'
            height='36'
            alt='zeeinvoicesLogo.svg'
            className='navbar_logo_img'
            src='/images/zeeinvoicesLogo.svg'
          />
        </div>

        <div className='navbar_btns'>
          <div className='navbar_btns_invoice'>
            <CustomButton
              fs='20px'
              lh='28px'
              p={'10px 13px'}
              color='#FFFFFF'
              bg={primaryColor}
              title='Create Invoice'
              clicked={() => route.push('/generate-invoice')}
            />
          </div>
          <div className='navbar_btns_login'>
            <CustomButton
              fs='20px'
              lh='28px'
              bg='#FFFFFF'
              title='Login'
              p={'10px 30px'}
              color={primaryColor}
              border="1px solid #3F4DE1"
              clicked={() => route.push('/login')}
            />
          </div>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Index