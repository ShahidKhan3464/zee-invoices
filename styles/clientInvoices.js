import styled from "styled-components";
import { primaryColor, secondaryColor } from "./global";

export const StyledClientInvoices = styled.div`
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

    &_clientInvoices {
      gap: 20px;
      display: flex;
      margin-top: 24px;
      align-items: center;

      &_client {
        width: 100%;
        max-width: 372px;
        border-radius: 8px;
        background: #ffffff;
        padding: 20px 24px 32px;
        padding-right: 0;

        &_name {
          gap: 16px;
          display: flex;
          align-items: center;
          
          h6 {
            margin: 0;
            width: 32px;
            height: 32px;
            display: flex;
            color: #ffffff;
            font-size: 20px;
            font-weight: 400;
            line-height: 20px;
            font-style: normal;
            font-family: Inter;
            border-radius: 100%;
            background: #4770ff;
            align-items: center;
            justify-content: center;
          }

          h3 {
            margin: 0;
            color: #333333;
            font-size: 24px;
            font-weight: 600;
            line-height: 32px;
            font-style: normal;
            font-family: Inter;
          }
        }

        &_details {
          gap: 16px;
          display: flex;
          margin-top: 32px;
          flex-direction: column;

          >div {
            gap: 5px;
            display: flex;
            align-items: center;

            p, span {
              margin: 0;
              font-size: 12px;
              font-weight: 400;
              line-height: 14px;
              font-style: normal;
              font-family: Inter;
            }
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