import React, { useState } from "react";
import Link from "next/link";
import { Dropdown, Space } from "antd";
import MobileNavbar from "./mobileNavbar";
import { InvoiceBuilderNavbar } from "./style";
import { DownOutlined } from "@ant-design/icons";
import { primaryColor, secondaryColor } from 'styles/globalStyle';
import CustomButton from "components/customButton";

const items = [
  {
    key: "1",
    label: (
      <a rel='noopener noreferrer' href='#'>
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a rel='noopener noreferrer' href='#'>
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a rel='noopener noreferrer' href='#'>
        3rd menu item
      </a>
    ),
  },
]

const Index = () => {
  const [mobileNav, setmobileNav] = useState(false)

  return (
    <InvoiceBuilderNavbar>
      <div className='navbar_content container'>
        <div className='navbar_content_logo'>
          <Link href='/'>
            <picture>
              <img
                alt='zeeinvoicesLogo.svg'
                src='/images/zeeinvoicesLogo.svg'
              />
            </picture>
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
            // clicked={navigateHandler}
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
            />
          </div>
        </div>

        {/* <div className='navbar_content_links'>
          <div className="navbar_content_links_nav">
            <Link href='/myinvoices' className='navbar_content_links_nav_link'>
              <picture>
                <img src='images/invoicesicon.svg' alt='invoicesicon.svg' />
              </picture>
              <p>Invoices</p>
            </Link>
            <Link href='/clientinvoices' className='navbar_content_links_nav_link'>
              <picture>
                <img src='images/clientsIcon.svg' alt='clientsIcon.svg' />
              </picture>
              <p>Clients</p>
            </Link>
            <Link href='#' className='navbar_content_links_nav_link'>
              <picture>
                <img src='images/detailIcon.svg' alt='detailIcon.svg' />
              </picture>
              <p>My Details</p>
            </Link>
          </div>

          <div className='navbar_content_links_link_profile'>
            <Dropdown
              menu={{
                items,
              }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <picture>
                    <img
                      src='images/profileDummyPic.png'
                      alt='profileDummyPic.png'
                    />
                  </picture>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className='navbar_content_hamberg'>
            <picture>
              <img
                src='images/hamberg.svg'
                alt='images/hamberg.svg'
                onClick={() => setmobileNav(true)}
              />
            </picture>
          </div>
        </div> */}
      </div>
      <MobileNavbar mobileNav={mobileNav} setmobileNav={setmobileNav} />
    </InvoiceBuilderNavbar>
  )
}

export default Index