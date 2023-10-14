import styled from "styled-components";
import { primaryColor, secondaryColor } from "./global";

export const StyledMyInvoices = styled.div`
  padding: 24px 20px 0;

  .invoicesDetail {
    &_header {
      h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        font-family: Inter;
        font-style: normal;
        color: ${secondaryColor};
      }
    }

    &_recentInvoices {
      gap: 20px;
      display: flex;
      margin-top: 24px;
      align-items: center;

      &_invoice {
        gap: 44px;
        width: 100%;
        display: flex;
        max-width: 273px;
        border-radius: 8px;
        background: #ffffff;
        flex-direction: column;
        padding: 16px 16px 20px;

        &_name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          h6 {
            margin: 0;
            color: #ffffff;
            font-size: 12px;
            padding: 4px 9px;
            font-weight: 400;
            line-height: 16px;
            font-style: normal;
            font-family: Inter;
            border-radius: 100%;
            background: #4770ff;
          }

          p {
            margin: 0;
            color: #6b7280;
            font-size: 12px;
            font-weight: 300;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
          }
        }

        &_to {
          text-align: center;

          p {
            margin: 0;
            color: #9CA3AF;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            text-transform: uppercase;
          }

          h1 {
            margin: 0;
            margin-top: 8px;
            font-size: 24px;
            font-weight: 600;
            line-height: 32px;
            font-style: normal;
            font-family: Inter;
            color: ${secondaryColor};
          }
        }

        &_totalAmount {
          text-align: center;

          h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            font-style: normal;
            font-family: Inter;
            color: ${secondaryColor};
          }

          p {
            margin: 0;
            color: #9CA3AF;
            margin-top: 4px;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
          }
        }
      }
    }

    &_allInvoices {
      gap: 16px;
      display: flex;
      padding: 24px;
      margin-top: 32px;
      border-radius: 4px;
      background: #ffffff;
      flex-direction: column;

      &_header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &_content {
          gap: 8px;
          display: flex;
          flex-direction: column;

          h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            font-style: normal;
            font-family: Inter;
            color: ${secondaryColor};
          }

          p {
            margin: 0;
            color: #64748B;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            font-style: normal;
            font-family: Inter;
          }
        }

        &_btn {
          gap: 10px;
          display: flex;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          border-radius: 4px;
          padding: 19px 16px;
          font-family: Inter;
          font-style: normal;
          align-items: center;
          background: ${primaryColor};
        }
      }

      &_search {
        padding: 12px;
        border-radius: 4px;
        background: #F7F8F9;

        &_input {
          max-width: 425px;

          .ant-input-affix-wrapper  {
            outline: none;
            border-radius: 4px;
            border: 1px solid #E7EAEE;

            input {
              outline: none;
              color: #64748B;
              font-size: 15px;
              font-weight: 300;
              padding: 10px 6px;
              line-height: 18px;
              font-family: Inter;
              font-style: normal;
              background: #ffffff;
            }
          }
        }
      }

      &_dataTable {
        .invoicesDetail_allInvoices_table_btns {
          gap: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          button {
            color: #64748b;
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            font-style: normal;
            font-family: Inter;
            border-radius: 4px;
            background: #e7eaee;
          }

          button:last-child {
            color: #FFFFFF;
            background: ${primaryColor};
          }
        }
      }
    }
  }
`

export const StyledEmptyInvoice = styled.div`
  display: flex;
  padding-top: 136px;
  align-items: center;
  justify-content: center;

  .emptyInvoice {
    &_body_content {
      &_emptyInvoiceCard {
        padding: 24px;
        max-width: 500px;
        text-align: center;
        border-radius: 8px;
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06);

        &_image {
          margin-bottom: 24px;
          img {
            width: 95px;
            height: 95px;
          }
        }

        &_heading {
          margin-bottom: 16px;
          h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            line-height: 40px;
            font-style: normal;
            font-family: Inter;
            color: ${secondaryColor};
          }
        }

        &_desc {
          margin-bottom: 16px;
          p {
            margin: 0;
            color: #6B7280;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            font-style: normal;
            font-family: Inter;
          }
        }
      }
    }
  }
`