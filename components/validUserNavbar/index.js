import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import MobileNavbar from "./mobileNavbar";
import { InvoiceBuilderNavbar } from "./style";
import CustomButton from "components/customButton";
import { primaryColor, secondaryColor } from 'styles/global';

const Index = () => {
  const route = useRouter()
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <InvoiceBuilderNavbar>
      <div className='navbar_content container'>
        <div className='navbar_content_logo'>
          <Link href='/'>
            <Image
              width='96'
              height='36'
              alt='zeeinvoicesLogo.svg'
              src='/images/zeeinvoicesLogo.svg'
            />
          </Link>
        </div>

        <div className='navbar_content_btns'>
          <div className='navbar_content_btns_login'>
            <CustomButton
              fs='16px'
              lh='19px'
              title='Login'
              p={'10px 16px'}
              bg="transparent"
              color={secondaryColor}
              clicked={() => route.push('/login')}
            />
          </div>

          <div className='navbar_content_btns_signUp'>
            <CustomButton
              fs='16px'
              lh='19px'
              title='Sign Up'
              color='#FFFFFF'
              p={'10px 24px'}
              bg={primaryColor}
              border="1px solid #3F4DE1"
              clicked={() => route.push('/sign-up')}
            />
          </div>
        </div>
      </div>
      <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
    </InvoiceBuilderNavbar>
  )
}

export default Index