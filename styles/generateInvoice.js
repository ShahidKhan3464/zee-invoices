import styled from "styled-components";
import { secondaryColor } from "./global";

export const GenerateInvoiceStyled = styled.div`
  min-height: 100vh;
  background: #F3F5F7;
  padding-bottom: 80px;

  .generateInvoiceModal {
    /* width: 60vw; */
  }
`

export const InvoiceBuilderHeader = styled.div`
  display: grid;
  padding-top: 36px;
  align-items: center;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  .invoiceBuilderTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_web {
      gap: 10px;
      display: flex;
      align-items: center;

      &_input {
        gap: 10px;
        display: flex;

        label {
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          font-family: Inter;
          font-style: normal;
          color: ${secondaryColor};  
        }

        input {
          width: 50px;
          border: none;
          outline: none;
          font-size: 24px;
          font-weight: 500;
          max-width: 140px;
          line-height: 32px;
          font-style: normal;
          font-family: Inter;
          background: transparent;
          color: ${secondaryColor};
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
      }

      &_readOnly {
        gap: 20px;
        display: flex;
        align-items: center;

        p {
          margin: 0;
          color: #333333;
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          font-style: normal;
          font-family: Inter;
        }
      }
    }

    &_mobile {
      @media screen and (min-width: 900px) {
        display: none;
      }
    }
  }

  .invoiceBuilderHeaderBtns {
    gap: 16px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr;
  }
`

export const InvoiceBuilderForm = styled.div`
  gap: 20px;
  display: grid;
  margin-top: 30px;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .invoice_builder_page {
    padding: 28px;
    min-height: 80vh;
    background-color: #FFFFFF;
    border-top: 4px solid
      ${(props) =>
    props.invoiceBuilderColor ? props.invoiceBuilderColor : "#2B2B2B"};

    &_header {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 900px) {
        flex-direction: column;
      }

      p:nth-child(1) {
        width: 32%;
      }

      p:nth-child(2) {
        width: 15%;
        text-align: center;
      }

      p:nth-child(3) {
        width: 15%;
        text-align: center;
      }

      p:nth-child(4) {
        width: 15%;
        text-align: center;
      }

      p:nth-child(5) {
        width: 15%;
        text-align: right;
      }

      &_upload {
        &_image {
          position: relative;

          .image_hover_effect {
            display: none;
          }

          &:hover .image_hover_effect {
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            display: block;
            cursor: pointer;
            position: absolute;
            align-items: center;
            justify-content: center;
            background-color: rgb(120, 120, 120, 0.7);

            img {
              width: 20px;
              height: 20px;
            }
          }
        }

        &_btn {
          height: 56px;
          border-radius: 4px;
          background: #F9F9F9;
          border: 1px dashed #E0E0E0;

          @media screen and (max-width: 900px) {
            width: 100%;
            max-width: 100%;
          }

          input {
            opacity: 0;
            height: 100%;
            max-width: 200px;
            transform: translateY(-50px);
          }

          &_content {
            display: grid;
            padding: 11px;
            grid-template-columns: 1fr 3fr;

            &_file {
              p {
                color: #9CA3AF;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                font-family: Inter;
                font-style: normal;
                margin-bottom: 3px;
                width: 100% !important;
                letter-spacing: -0.02em;
              }
              h1 {
                margin: 0;
                color: #374151;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                font-family: Inter;
                font-style: normal;
                width: max-content;
                border-bottom: 1px solid #374151;
              }
            }
          }
        }
      }

      &_select_invoice {
        width: 200px;
        height: 56px;
        padding: 8px;
        border-radius: 4px;
        background: #f9f9f9;
        border: 1px dashed #e0e0e0;

        @media screen and (max-width: 900px) {
          width: 100%;
          max-width: 100%;
          margin-top: 15px;
        }

        p {
          color: #9ca3af;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          font-style: normal;
          margin-bottom: 5px;
          font-family: Inter;
          letter-spacing: -0.02em;
        }

        select {
          width: 100%;
          border: none;
          outline: none;
          color: #374151;
          font-size: 14px;
          font-weight: 400;
          background: none;
          line-height: 16px;
          font-style: normal;
          font-family: Inter;
          letter-spacing: -0.02em;
        }
      }
    }

    &_body {
      gap: 60px;
      display: grid;
      margin-top: 30px;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 900px) {
        gap: 15px;
        margin-top: 15px;
        grid-template-columns: 1fr;
      }

      &_from, &_to {
        p {
          color: #9ca3af;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          font-style: normal;
          font-family: Inter;
          margin-bottom: 14px;
        }

        &_senderDetail, &_receiverDetail {
          padding: 16px;
          min-height: 192px;
          border-radius: 5px;
          background: #FFFFFF;
          height: calc(100% - 30px);
          border: 1px solid #D0D5DD;

          h1 {
            margin: 0;
            color: #6B7280;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
          }

          &_btn {
            height: 100%;
            display: flex;
            cursor: pointer;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            p {
              color: #374151;
              font-size: 12px;
              font-weight: 400;
              margin-top: 14px;
              line-height: 16px;
              font-style: normal;
              font-family: Inter;
            }
          }
        }

        &_detail {
          padding: 16px;
          min-height: 192px;
          border-radius: 5px;
          background: #FFFFFF;
          border: 1px solid #d0d5dd;

          &_title {
            display: flex;
            align-items: center;
            margin-bottom: 19px;
            justify-content: space-between;

            > h1 {
              margin: 0;
              color: #6b7280;
              font-size: 12px;
              font-weight: 400;
              line-height: 14px;
              font-style: normal;
              font-family: Inter;
            }

            img {
              cursor: pointer;
            }
          }

          >h1 {
            margin: 0;
            font-size: 14px;
            font-weight: 700;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            margin-bottom: 16px;
            color: ${secondaryColor};
          }

          p {
            margin: 0;
            color: #4f4f4f;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            margin-bottom: 12px;
          }
        }
      }
    }

    &_controls {
      gap: 60px;
      display: grid;
      margin: 20px 0;
      grid-template-columns: 1fr 1fr;

      &_date {
        label {
          color: #202020;
          font-size: 10px;
          font-weight: 600;
          line-height: 12px;
          margin-right: 8px;
          font-style: normal;
          font-family: Inter;
        }
      }
    }

    &_table {
      &_header {
        padding: 10px;
        display: flex;
        // display: grid;
        border-radius: 2px;
        align-items: center;
        justify-content: space-between;
        // grid-template-columns: repeat(5, 1fr);
        background-color: ${(props) => props.invoiceBuilderColor ? props.invoiceBuilderColor : "#2B2B2B"};

        p {
          margin: 0;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          line-height: 14px;
          font-family: Inter;
          font-style: normal;
        }
      }

      &_form {
        .ant-form-item:first-child {
          width: 83.5%;
        }

        &_fields {
          gap: 16px;
          display: flex;
          align-items: center;
          // grid-template-columns: repeat(5, 1fr);

          >div:nth-child(1) {
            width: 35%;
          }

          >div:nth-child(2) {
            width: 15%;
          }

          >div:nth-child(3) {
            width: 15%;
          }

          >div:nth-child(4) {
            width: 15%;
          }

          @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;
          }

          .ant-form-item {
            margin-bottom: 10px;

            .ant-input-number {
              width: 100%;
            }
            input {
              width: 100%;
            }
          }

          p {
            width: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      &_editable {
        &_inputs {
          gap: 10px;
          display: flex;
          margin: 9px 0;
          // grid-template-columns: repeat(5, 1fr);

          p {
            margin: 0;
            width: 15%;
            display: flex;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            font-family: Inter;
            font-style: normal;
            align-items: center;
            justify-content: center;
            color: ${secondaryColor};
          }

          .ant-input {
            width: 35%;
          }

          .ant-input-number {
            // width: 100%;
            width: 15%;
          }
        }
      }

      &_row {
        border-bottom: 1px solid #e0e0e0;

        .showCrossonHover {
          position: relative;

          .tableActions {
            display: none;

            img {
              width: 15px;
              height: 15px;
            }
          }

          &:hover .tableActions {
            top: 40%;
            gap: 10px;
            right: 10px;
            display: flex;
            cursor: pointer;
            align-items: center;
            position: absolute;
          }
        }

        &_body {
          display: flex;
          padding: 10px;
          // display: grid;
          position: relative;
          align-items: center;
          justify-content: space-between;
          // grid-template-columns: repeat(5, 1fr);

          p {
            margin: 0;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            font-style: normal;
            font-family: Inter;
            color: ${secondaryColor};
          }
        }

        .tableRowDescription {
          color: #6b7280;
          padding: 0 10px;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          font-style: normal;
          font-family: Inter;
          margin-bottom: 16px;
        }
      }
    }
    
    &_summary {
      width: 100%;
      max-width: 240px;
      margin-left: auto;
      border-radius: 3px;
      border: 1px solid #e0e0e0;

      @media screen and (max-width: 900px) {
        max-width: 100%;
      }

      &_header {
        padding: 8px 0;
        text-align: center;
        border-radius: 2px 2px 0px 0px;
        background: ${(props) => props.invoiceBuilderColor ? props.invoiceBuilderColor : "#2B2B2B"};

        p {
          margin: 0;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 700;
          line-height: 14px;
          font-family: Inter;
          font-style: normal;
        }
      }

      &_body {
        padding: 12px;

        &_subtotal,  &_tax, &_total {
          p {
            margin: 0;
            color: #767676;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            letter-spacing: -0.02em;
          }

          h6 {
            margin: 0;
            color: #202020;
            font-size: 12px;
            font-weight: 300;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            letter-spacing: -0.02em;

            span {
              font-weight: 800;
              margin-left: 3px;
            }
          }
        }

        &_subtotal {
          display: flex; 
          padding-top: 10px;
          padding-bottom: 10px;
          justify-content: space-between;
          border-bottom: 0.5px solid #e0e0e0;
        }

        &_tax {
          display: flex;
          padding-top: 20px;
          padding-bottom: 10px;
          justify-content: space-between;
          border-bottom: 0.5px solid #e0e0e0;
        }

        &_total {
          display: flex;
          padding-top: 20px;
          padding-bottom: 10px;
          justify-content: space-between;
        }
      }
    }

    &_setting {
      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    &_footer {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 0.5px solid #6b7280;

      input {
        width: 100%;
        outline: none;
        font-size: 12px;
        font-weight: 300;
        padding: 8px 16px;
        line-height: 16px;
        border-radius: 2px;
        font-family: Inter;
        font-style: normal;
        background: #f9f9f9;
        border: 1px dashed #e0e0e0;
        ::placeholder {
          color: #767676;
        }
      }
    }
  }

  .invoiceSubmitButton {
    outline: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    border-radius: 4px;
    font-family: Inter;
    background: #f9f9f9;
    font-style: normal;
    border: 1px dashed #e0e0e0;

    &:hover {
      color: ${secondaryColor};
    }
  }
`

export const InvoiceModalBodyStyle = styled.div`
  .generateFormInputes {
    gap: 18px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }

  .basicinformation {
    @media screen and (max-width: 700px) {
      text-align: center;
    }

    h1 {
      margin: 0;
      color: #444444;
      font-size: 14px;
      font-weight: 300;
      line-height: 20px;
      font-family: Inter;
      font-style: normal;
      margin-bottom: 20px;
    }
  }

  .addressinformation {
    margin-top: 40px;

    @media screen and (max-width: 700px) {
      margin-top: 15px;
      text-align: center;
    }

    h1 {
      margin: 0;
      color: #444444;
      font-size: 16px;
      font-weight: 300;
      line-height: 20px;
      font-family: Inter;
      font-style: normal;
      margin-bottom: 20px;
    }
  }

  .informationBtn {
    margin-top: 32px;

    @media screen and (max-width: 700px) {
      margin-top: 27px;
    }
  }
`