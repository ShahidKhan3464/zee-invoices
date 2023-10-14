import styled from "styled-components";
import { grey600, grey900, secondaryColor } from "styles/global";

export const HomePageStyleContainer = styled.div`
`

export const HomePageStyleHeader = styled.div`
  height: 100vh;
  .header {
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("images/homepageBackground.png");

    &_content {
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      &_heading {
        max-width: 729px;

        p {
          font-size: 24px;
          font-weight: 400;
          color: ${grey600};
          line-height: 28px;
          font-family: Inter;
          text-align: center;
          font-style: normal;

          @media screen and (max-width: 991px) {
            font-size: 20px;
            line-height: 25px;
          }

          @media screen and (max-width: 480px) {
            font-size: 16px;
          }
        }

        h1 {
          font-size: 52px;
          font-weight: 800;
          line-height: 64px;
          color: ${grey900};
          text-align: center;
          font-style: normal;
          font-family: Plus Jakarta Sans;

          @media screen and (max-width: 991px) {
            font-size: 50px;
            line-height: 55px;
          }

          @media screen and (max-width: 480px) {
            font-size: 32px;
            line-height: 42px;
          }
        }
      }

      &_btn {
        margin-top: 40px;
        @media screen and (max-width: 768px) {
          margin-top: 20px;
        }
      }
    }
  }
`

export const InvoicePlaceHolderImage = styled.div`
  width: 100%;
  display: block;
  max-width: 880px;
  text-align: center;
  margin: -24vh auto 0;

  .invoicePlaceHolderImage_img {
    position: inherit !important;
  }
`

export const AmazingFeatureStyle = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 56px;
  }

  .amazingfeature {
    &_heading {
      text-align: center;
      margin-bottom: 42px;

      @media screen and (max-width: 768px) {
        margin-bottom: 32px;
      }

      h1 {
        margin: 0;
        font-size: 48px;
        font-weight: 700;
        line-height: 90px;
        font-style: normal;
        font-family: Inter;
        color: ${secondaryColor};

        @media screen and (max-width: 768px) {
          font-size: 28px;
          line-height: 32px;
        }
      }
    }

    &_cards {
      gap: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      &_card {
        width: 350px;
        height: 279px;
        padding: 30px;
        margin: 0 auto;
        text-align: center;
        border-radius: 10px;
        background: #FFFFFF;
        box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.08);

        &_icon {
          margin-bottom: 24px;
          &_img {
            position: inherit !important;
          }
        }

        &_detail {
          h1 {
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
            font-style: normal;
            font-family: Inter;
            color: ${secondaryColor};
          }

          p {
            margin: 0;
            color: #6b7280;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            font-style: normal;
            font-family: Inter;
          }
        }
      }
    }
  }
`

export const SoftwareInvoicingStyle = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 56px;
  }

  .softwareInvoicing_main {
    height: 100%;
    min-height: 672px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/softwareinvoicingBackground.png");

    @media screen and (max-width: 768px) {
      background-image: unset;
    }

    &_content {
      gap: 57px;
      display: grid;
      padding-top: 80px;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 768px) {
        padding-top: 56px;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;

        &_img {
          grid-row: 2/3;
        }
        &_detail {
          grid-row: 1/2;
        }
      }

      &_img {
        &_myimg {
          position: inherit !important;
        }

        @media screen and (max-width: 768px) {
          padding: 0 30px;
        }
      }

      &_detail {
        @media screen and (max-width: 768px) {
          padding: 0 40px;
          text-align: center;
        }
        h1 {
          margin: 0;
          color: #4F4F4F;
          font-size: 48px;
          font-weight: 700;
          line-height: 62px;
          font-style: normal;
          font-family: Inter;
          margin-bottom: 32px;
          letter-spacing: 0.01em;
          @media screen and (max-width: 768px) {
            font-size: 28px;
            line-height: 36px;
          }
        }
        p {
          color: #6B7280;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          font-style: normal;
          font-family: Inter;
          margin-bottom: 24px;
          @media screen and (max-width: 768px) {
            margin-top: 24px;
          }
        }

        &_btn {
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }
`

export const SmartInvoicingStyle = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 56px;
  }

  .smartinvoincing_content {
    &_heading {
      text-align: center;
      margin-bottom: 45px;
      h1 {
        margin: 0;
        font-size: 48px;
        font-weight: 700;
        line-height: 62px;
        font-style: normal;
        font-family: Inter;
        color: ${secondaryColor};
        @media screen and (max-width: 768px) {
          font-size: 28px;
          line-height: 36px;
        }
      }
    }

    &_cards {
      display: grid;
      gap: 20px 30px;
      align-items: center;
      margin-bottom: 40px;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      &_card {
        gap: 21px;
        height: 100%;
        display: flex;
        padding: 32px 19px;
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.08);

        &_detail {
          h1 {
            margin: 0;
            font-size: 22px;
            font-weight: 600;
            line-height: 30px;
            font-style: normal;
            font-family: Inter;
            margin-bottom: 12px;
            color: ${secondaryColor};
          }
          p {
            margin: 0;
            color: #6b7280;
            font-size: 16px;
            font-weight: 400;
            margin-top: 11px;
            line-height: 24px;
            font-style: normal;
            font-family: Inter;
          }
        }
      }
    }
  }
`

export const SaveTimeStyle = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 56px;
  }

  .saveTime_content {
    gap: 57px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &_detail {
      @media screen and (max-width: 768px) {
        text-align: center;
      }

      h1 {
        margin: 0;
        font-size: 48px;
        font-weight: 700;
        line-height: 62px;
        font-style: normal;
        font-family: Inter;
        margin-bottom: 29px;
        color: ${secondaryColor};
        span {
          display: block;
        }
        @media screen and (max-width: 768px) {
          font-size: 28px;
          line-height: 36px;
        }
      }
      p {
        margin: 0;
        color: #6b7280;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        font-family: Inter;
        margin-bottom: 24px;
        @media screen and (max-width: 768px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    &_image {
      &_img {
        position: inherit !important;
      }
    }
  }
`

export const FooterStyle = styled.div`
  margin-top: 100px;
  background-color: #222039;

  @media screen and (max-width: 768px) {
    margin-top: 56px;
  }

  .footer_content {
    padding-top: 88px;

    @media screen and (max-width: 768px) {
      padding-top: 72px;
    }

    &_detail {
      text-align: center;
      margin-bottom: 64px;

      &_img {
        margin-bottom: 32px;
        position: inherit !important;
      }

      p {
        color: #D9D9D9;
        margin: 0 auto;
        font-size: 16px;
        font-weight: 400;
        max-width: 668px;
        line-height: 24px;
        font-style: normal;
        font-family: Inter;
      }
    }

    &_bottom {
      gap: 30px;
      display: flex;
      flex-wrap: wrap;
      padding-top: 30px;
      align-items: center;
      padding-bottom: 47px;
      border-top: 1px solid #9c9da0;
      justify-content: space-between;

      @media screen and (max-width: 768px) {
        border: none;
        padding-top: 0;
      }

      p {
        gap: 16px;
        display: flex;
        margin: 0 auto;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        font-family: Inter;
        align-items: center;
      }

      h6 {
        opacity: 0.85;
        margin: 0 auto;
        color: #D9D9D9;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        font-style: normal;
        font-family: Inter;
        mix-blend-mode: normal;
      }

      &_socialIcons {
        gap: 25px;
        display: flex;
        margin: 0 auto;
        align-items: center;
      }
    }
  }
`