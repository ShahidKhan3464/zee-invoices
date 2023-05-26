import styled from "styled-components";

export const MyInvoicesStyle = styled.div`
  background-color: #eeeeee;
  height: 100vh;

  .emptyInvoices_body {
    height: 100%;
    padding: 50px 0;
    &_content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &_emptyInvoicesCard {
        max-width: 500px;
        background-color: white;
        padding: 16px;
        text-align: center;
        &_image {
          margin-bottom: 24px;
          img {
            width: 95px;
            height: 95px;
          }
        }
        &_heading {
          h1 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 20px;
            color: #333333;
          }
        }
        &_desc {
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #9ca3af;
          }
        }
        &_btn {
        }
      }
    }
  }

  .invoicesDetail {
    &_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 24px;

      h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #333333;
      }

      &_newInvoiceButton {
        background: #333333;
        border-radius: 4px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        padding: 10px 23px;
        height: auto;

        :hover {
          color: white;
        }
      }
    }

    &_recentinvoices {
      &_invoice {
        max-width: 264px;
        background: #ffffff;
        border-radius: 8px;
        padding: 16px;

        display: flex;
        flex-direction: column;
        gap: 40px;

        &_name {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h6 {
            background-color: #4770ff;
            border-radius: 100%;
            padding: 5px 9px;
            margin: 0;
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #ffffff;
          }
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 14px;
            color: #6b7280;
          }
        }

        &_totalInvoices {
          text-align: center;

          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #9ca3af;
          }
          h1 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: #333333;
          }
          h2 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 14px;
            color: #333333;
          }
        }
        &_time {
          text-align: center;
          h3 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 14px;
            color: #333333;
          }
          p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #9ca3af;
          }
        }
      }
    }

    &_allInvoices {
      background: #ffffff;
      border-radius: 4px;
      padding: 24px;
      margin-top: 40px;
      &_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &_content {
          h1 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            color: #333333;
          }
          p {
            /* font-family: 'Manrope'; */
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
            color: #64748b;
          }
        }
        &_btn {
          background: #333333;
          border-radius: 4px;
          padding: 12px 16px;
          height: auto;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;

          :hover {
            color: #ffffff;
          }
        }
      }

      &_search {
        background: #f7f8f9;
        border-radius: 4px;
        padding: 12px;
        &_input {
          max-width: 425px;
          input {
            background: #ffffff;
            border: 1px solid #e7eaee;
            border-radius: 4px;
            border: none;
            padding: 8px;
          }
        }
      }
      &_dataTable {
        .invoicesDetail_allInvoices_table_btns {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 20px;

          button {
            background: #e7eaee;
            border-radius: 4px;
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #64748b;
          }
        }
      }
    }
  }
`;
