import styled from "styled-components";

export const InvoiceBuilderNavbar = styled.div`
  padding: 16px 10px;
  background-color: #FFFFFF;

  .navbar_content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_btns {
      gap: 15px;
      display: flex;
      align-items: center;
    }

    &_links {
      display: flex;
      align-items: center;
      gap: 48px;

      @media screen and (max-width: 678px) {
        gap: 20px;
      }

      &_nav {
        display: flex;
        align-items: center;
        gap: 48px;

        @media screen and (max-width: 678px) {
          display: none;
        }

        &_link {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;

          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #333333;
            margin: 0;
          }
        }
      }
    }
    &_hamberg {
      order: 1;
      @media screen and (min-width: 678px) {
        display: none;
      }
    }
  }
`

export const InvoiceMobileNavstyle = styled.div`
  .invoice_mobile_nav_content {
    padding: 0 32px;
    &_logo {
      text-align: center;
    }
    &_links {
      margin-top: 36px;

      &_link {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 15px;

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #333333;
          margin: 0;
        }
      }
    }
  }
`