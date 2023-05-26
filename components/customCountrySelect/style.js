import styled from "styled-components";

export const CustomInputContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 148%;
    color: #292929;
    margin-bottom: 7px;
    display: block;
    text-align: left;
  }
  .react-tel-input input {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 18px 68px;

    ::placeholder {
      color: #aba7af;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
    }
  }
  .flag-dropdown {
    background-color: #ffffff;
    padding: 0 0 0 8px;

    .selected-flag{
      width: 55px;
    }
  }
`;
