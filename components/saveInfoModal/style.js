import styled from "styled-components";

export const SaveInfoModalContainer = styled.div`
  .infoModal_body {
    padding: 25px;
    &_header {
      text-align: center;
      h1 {
        margin: 0;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 46px;
        line-height: 62px;
        color: #090914;
      }
      p {
        margin: 0;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #6b7280;
      }
    }

    &_btns {
      &_btn {
        margin-top: 24px;
      }
    }
    &_footer {
      &_divider {
        display: grid;
        grid-template-columns: 1fr 23px 1fr;
        align-items: center;
        gap: 32px;
        margin: 40px 0;

        span {
          height: 1px;
          width: 100%;
          background-color: #9ca3af;
        }

        p {
          margin: 0;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #71717a;
        }
      }

      &_title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #71717a;
          margin: 0;
        }
        h6 {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 22px;
          color: #2563eb;
          margin: 0;
          cursor: pointer;
        }
      }
    }
  }
`;

export const CustomButtonFilledStyle = styled.div`
  .ant-btn {
    width: 100%;
    background-color: ${(props) => (props.filled ? props.bg : "#FFFFFF")};
    border: 1px solid ${(props) => (props.filled ? props.bg : "#9ca3af")};
    border-radius: 9px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => (props.color ? props.color : "#6b7280")};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    height: 60px;

    :hover {
      background-color: ${(props) => (props.filled ? props.bg : "#FFFFFF")};
      color: ${(props) => (props.color ? props.color : "#6b7280")};
    }
  }
`;
