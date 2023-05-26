import styled from "styled-components";

export const CustomInputContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;

  label {
    display: block;
    color: #292929;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 148%;
    font-family: Inter;
    font-style: normal;
    margin-bottom: 7px;
  }

  .ant-input {
    padding: 7px 8px;
    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;

    ::placeholder{
      color: #ABA7AF;
      font-size: 12px;
      line-height: 140%;
    }
  }
`