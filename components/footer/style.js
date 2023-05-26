import styled from "styled-components";

export const FooterStyleContainer = styled.div`
  .firstFooter {
    background-color: #333333;

    &_main {
      display: flex;
      padding: 13px 10px;
      justify-content: space-between;

      &_socialIcons {
        gap: 11px;
        display: flex;
        align-items: center;
      }
    }
  }

  .secondFooter {
    background-color: #E4E4E7;

    &_main {
      display: flex;
      padding: 12px 10px;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width : 650px) {
        flex-direction: column;
      }

      h6 {
        margin: 0;
        color: #3d4451;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        font-family: Inter;
        font-style: normal;
      }

      &_links {
        gap: 42px;
        display: flex;
        align-items: center;

        p {
          margin: 0;
          color: #3d4451;
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          font-family: Inter;
          font-style: normal;
        }
      }
    }
  }
`