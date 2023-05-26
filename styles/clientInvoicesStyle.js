import styled from "styled-components";

export const ClientInvoicesStyle = styled.div`
  background-color: #eeeeee;
  height: 100vh;
  padding-top: 76px;

  .invoicesDetail {

    &_allInvoices {
      background: #ffffff;
      border-radius: 4px;
      padding: 24px;
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
        margin-top: 20px;
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