import styled from "styled-components";

export const CustomInputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;

  label {
    display: block;
    color: #292929;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 148%;
    font-family: Inter;
    font-style: normal;
    margin-bottom: 4px;
  }

  .ant-input {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    border-radius: 6px;
    padding: 14px 16px;
    font-style: normal;
    font-family: Inter;
    background: #FFFFFF;
    border: 1px solid #E4E4E7;

    ::placeholder {
      color: #9CA3AF;
    }
  }
`