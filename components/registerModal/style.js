import styled from "styled-components";

export const RegisterStyled = styled.div`
  .registerStyled {
    padding: 30px;

    &_header{
        text-align: center;
        h1{
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 46px;
line-height: 62px;
color: #090914;
margin: 0;
        }
        p{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: #6B7280;


        }
    }
    &_form {
      &_input {
        margin-bottom: 15px;
        input {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 9px;
          padding: 15px 15px;

          ::placeholder {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #52525b;
          }
        }
      }
      &_checkbox {
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #4f4f4f;

          .terms_condition {
            color: #0286ff;
          }
        }
      }
      &_btn {
        margin-top: 32px;
        button {
          width: 100%;
          background: #333333;
          border-radius: 9px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;
          color: #ffffff;
          height: 65px;
          :hover {
            color: #ffffff;
          }
        }
      }
    }

    &_footer {
      &_divider {
        display: grid;
        grid-template-columns: 1fr 133px 1fr;
        align-items: center;
        gap: 22px;
        margin-top: 32px;

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

        &_socialIcons {
        }
        &_title {
        }
      }
      &_socialIcons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        margin: 32px 0;
      }
      &_title {
        text-align: center;
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #71717a;

          span {
            color: #2563eb;
            font-family: "Inter";
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 22px;
          }
        }
      }
    }
  }
`;
