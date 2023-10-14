import styled from "styled-components";
import { secondaryColor } from "styles/global";

export const BuilderInvoiceSetting = styled.div`
  @media screen and (min-width : 900px) {
    top: 0;
    padding: 20px;
    position: sticky;
    min-height: 60vh;
    background-color: #FFFFFF;
  }

  /* @media screen and (max-width : 900px) {
    display: none;
  } */

  .builder_setting {
    &_title {
      margin-bottom: 24px;

      h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        font-family: Inter;
        font-style: normal;
        color: ${secondaryColor};
      }
    }

    &_defaultColors {
    
      >div {
        gap: 8px;
        display: grid;
        padding-top: 8px;
        text-align: center;
        grid-template-columns: repeat(8, 1fr);    
      }

      h4 {
        margin: 0;
        color: #444444;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        font-family: Inter;
        font-style: normal;
        padding-bottom: 8px;
        letter-spacing: -0.02em;
        border-bottom: 0.7px solid #E0E0E0;
      }
    }

    &_colorPicker {
      margin-top: 12px;

      .ant-collapse {
        border-radius: 4px;
        background-color: #FFFFFF;
        border: 1px solid #d0d5dd;
      }

      .ant-collapse-content-box {
        padding: 0;
      }

      .chrome-picker {
        margin-top: 10px;
        width: 100% !important;
        box-shadow: none !important;
        font-family: inherit !important;
      }

      &_panelHeader {
        gap: 10px;
        display: flex;
        align-items: center;

        p {
          margin: 0;
          color: #444444;
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          font-style: normal;
          font-family: Inter;
        }
      }
    }

    &_currency {
      margin-top: 24px;

      p {
        margin: 0;
        color: #444444;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        font-family: Inter;
        font-style: normal;
        padding-bottom: 10px;
        letter-spacing: -0.02em;
        border-bottom: 0.7px solid #e0e0e0;
      }

      .ant-select {
        outline: none;
        margin-top: 10px;
        width: 100% !important;

        .ant-select-selector {
          outline: none;
          border-radius: 2px;
          background: #FFFFFF;
          border: 1px solid #d0d5dd;
        }
      }
    }

    &_invoiceDetail {
      margin-top: 24px;

      > p {
        margin: 0;
        color: #444444;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        font-family: Inter;
        font-style: normal;
        padding-bottom: 10px;
        letter-spacing: -0.02em;
        border-bottom: 0.7px solid #e0e0e0;
      }

      &_switch {
        display: flex;
        padding: 0 20px;
        margin-top: 15px;
        align-items: center;
        justify-content: space-between;

        > p {
          color: #202020;
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          font-style: normal;
          font-family: Inter;
        }

        .ant-switch-checked {
          background-color: #34c759;
        }
      }
    }
  }
`

export const ColorCheckbox = styled.div`
  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    width: 32px;
    height: 32px;
    cursor: pointer;
    border-radius: 3px;
    display: inline-block;
    background-color: ${(props) => (props.color ? props.color : "red")};
    border: 1px solid ${(props) => (props.color ? props.color : "red")};
  }

  input[type="radio"]:checked + label:before {
    content: "";
    width: 100%;
    color: white;
    height: 100%;
    display: flex;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("images/checkedIcon.svg");
  }
`