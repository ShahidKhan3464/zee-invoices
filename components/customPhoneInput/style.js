import styled from "styled-components";

export const CustomInputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;

  label {
    color: #292929;
    display: block;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 148%;
    font-family: Inter;
    font-style: normal;
    margin-bottom: 4px;
  }

  .react-tel-input input {
    width: 100%;
    height: 32px;
    font-size: 12px;
    padding: 14px 60px;
    border-radius: 5px;
    background: #ffffff;
    border: 1px solid #e0e0e0;

    ::placeholder {
      color: #aba7af;
      font-size: 12px;
      font-weight: 400;
      line-height: 140%;
      font-family: Inter;
      font-style: normal;
    }
  }

  .flag-dropdown {
    border: 1px solid #e4e4e7;
    background-color: #ffffff;

    .selected-flag {
      width: 50px;
      padding: 0 0 0 10px;
    }
  }
`