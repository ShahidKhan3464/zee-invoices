import styled from "styled-components";
import { secondaryColor } from "styles/global";

export const InvoiceBuilderNavStyle = styled.div`
  background-color: #ffffff;
  padding: 24px 0;

  .invoicebuilder_nav_content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_hamberg {
      @media screen and (min-width: 520px) {
        display: none;
      }
    }

    &_logo {
      @media screen and (max-width: 520px) {
        display: flex;
        width: 100%;
        justify-content: center;
      }
    }

    &_btns {
      display: flex;
      align-items: center;
      gap: 32px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: ${secondaryColor};
        margin: 0;
      }
      h6 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        color: ${secondaryColor};
        margin: 0;
      }

      @media screen and (max-width: 520px) {
        display: none;
      }
    }
  }
`;



export const InvoiceMobileNavstyle = styled.div`
  .invoice_mobile_nav_content {
    padding: 0 32px;
    &_logo {
      text-align: center;
    }
    &_links {
      margin-top: 56px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #333333;
      }

      &_btns {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }
    }
  }
`;
