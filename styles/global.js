import styled from "styled-components";

export const grey600 = "#52525B";
export const grey900 = "#18181B";
export const primaryColor = "#3F4DE1";
export const secondaryColor = "#333333";

export const PrimaryButton = styled.button`
    width: 100%;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 16px;
    padding: 14px 0;
    cursor: pointer;
    font-weight: 600;
    line-height: 28px;
    font-style: normal;
    font-family: Inter;
    border-radius: 6px;
    letter-spacing: -0.2px;
    background: ${primaryColor};
`

export const GrayTableCell = styled.span`
    color: #9CA3AF;
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
    font-style: normal;
    font-family: Inter;
    letter-spacing: -0.02em;
`

export const StyledBox = styled.div`
    display: flex;
    padding-top: 120px;
    background: #F3F5F7;
    padding-bottom: 50px;
    justify-content: center;
    min-height: calc(100vh - 105px);

    .content {
        width: 100%;
        height: 100%;
        max-width: 520px;
        border-radius: 8px;
        background: #FFFFFF;
        padding: 40px 24px 24px;
        box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.06);

        &_top {
            img {
                width: auto;
                height: auto;
                margin: auto;
                display: block;
                padding-top: 14px;
                padding-bottom: 16px;
            }

            h2 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
                line-height: 40px;
                font-family: Inter;
                font-style: normal;
                text-align: center;
                margin-bottom: 8px;
                color: ${secondaryColor};
            }

            p {
                margin: 0;
                color: #6B7280;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                text-align: center;
                font-family: Inter;
                font-style: normal;
            }
        }

        &_resend-email {
            gap: 16px;
            display: flex;
            margin-top: 40px;
            align-items: center;
            flex-direction: column;

            p {
                margin: 0;
                color: #6B7280;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                text-align: center;
                font-family: Inter;
                font-style: normal;
            }
        }

        &_form {
            margin-top: 26px;
            margin-bottom: 24px;

            .field-control {
                margin-bottom: 16px;
            }

            .forgot-password {
                text-align: right;
                margin-bottom: 24px;

                a {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    text-align: center;
                    font-family: Inter;
                    font-style: normal;
                    color: ${primaryColor};
                }
            }

            .terms-condition {
                margin-top: 32px;
                margin-bottom: 16px;

                .checkbox {
                    color: #94A3B8;

                    &:hover {
                        background: transparent;
                    }
                }

                .Mui-checked {
                    color: ${primaryColor};
                }

                .MuiFormControlLabel-label {
                    color: #4F4F4F;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    text-align: center;
                    font-family: Inter;
                    font-style: normal;

                    .terms-condition {
                        color: #0286FF;
                    }
                }
            }
        }

        &_bottom {
            .continue-with {
                display: grid;
                margin-bottom: 24px;
                align-items: center;
                grid-template-columns: 1fr auto 1fr;

                div:first-child, div:last-child {
                    height: 1px;
                    background: #9CA3AF;
                }

                .text {
                    margin: 0 25px;
                    color: #6B7280;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 22px;
                    font-style: normal;
                    font-family: Inter;
                }
            }

            .social-media_btns {
                gap: 20px;
                display: flex;
                align-items: center;
                
                button {
                    gap: 4px;
                    display: flex;
                    outline: none;
                    cursor: pointer;
                    padding: 15px 34px;
                    border-radius: 6px;
                    align-items: center;
                    background: transparent;
                    border: 1px solid #E0E0E0;

                    span {
                        color: #71717A;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 22px;
                        font-style: normal;
                        font-family: Inter;
                    }
                }
            }

            .sign-up, .login {
                gap: 4px;
                display: flex;
                margin-top: 40px;
                align-items: center;
                justify-content: center;

                span {
                    color: #71717A;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    font-style: normal;
                    font-family: Inter;
                }

                a {
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 22px;
                    text-align: center;
                    font-family: Inter;
                    font-style: normal;
                    color: ${primaryColor};
                }
            }

            .login {
                margin-top: 60px;
            }
        }
    }
`

export const StyledDashboardContainer = styled.div`
    display: grid;
    background: #F3F5F7;
    grid-template-columns: ${props => props.sidebarVisibal ? '240px calc(100% - 240px)' : '100%'};

    .content {
        margin-left: 2px;
    }
`

export const StyledInvoiceModalBody = styled.div`
  .field-control {
    gap: 18px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }

  .basic-information {
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

  .address-information {
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

  .submit-btn {
    margin-top: 32px;

    @media screen and (max-width: 700px) {
      margin-top: 27px;
    }
  }
`