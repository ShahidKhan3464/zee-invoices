import styled from "styled-components";
import { primaryColor, secondaryColor } from "./global";

export const StyledViewClient = styled.div`
    padding: 24px 20px 0;

    .viewClient {
        gap: 32px;
        display: flex;
        margin-top: 24px;
        flex-direction: column;

        &_profile {
            display: flex;
            padding: 24px 33px;
            border-radius: 8px;
            background: #FFFFFF;
            align-items: center;
            justify-content: space-between;

            &_detail {
                gap: 24px;
                display: flex;
                align-items: center;

                &_icon {
                    width: 62px;
                    height: 62px;
                    display: flex;
                    border-radius: 50%;
                    align-items: center;
                    background: #4770FF;
                    justify-content: center;

                    h6 {
                        margin: 0;
                        color: #FFFFFF;
                        text-align: center;
                        font-family: Inter;
                        font-size: 33.889px;
                        line-height: 38.125px;
                    }
                }

                &_text {
                    gap: 16px;
                    display: flex;
                    flex-direction: column;

                    h3 {
                        margin: 0;
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 32px;
                        font-family: Inter;
                        color: ${secondaryColor};
                    }

                    p {
                        gap: 5px;
                        margin: 0;
                        display: flex;
                        font-size: 12px;
                        line-height: 14px;
                        font-family: Inter;
                        align-items: center;
                        color: ${secondaryColor};

                        span {
                            color: #9CA3AF;
                        }
                    }
                }
            }

            &_btn-container {
                gap: 24px;
                display: flex;
                align-items: center;

                button {
                    width: 98px;
                    height: 40px;
                    font-size: 16px;
                    font-weight: 500;
                    font-family: Inter;
                }

                .edit-btn {
                    color: #FFFFFF;
                    border-radius: 4px;
                    background: ${primaryColor};
                }

                .delete-btn {
                    color: #64748B;
                    border-radius: 4px;
                    background: #E7EAEE;
                }
            }
        }

        &_allInvoices {
            gap: 16px;
            display: flex;
            padding: 24px;
            margin-top: 32px;
            border-radius: 4px;
            background: #ffffff;
            flex-direction: column;

            &_header {
                display: flex;
                align-items: center;
                justify-content: space-between;

                &_content {
                    h1 {
                        margin: 0;
                        font-size: 24px;
                        font-weight: 500;
                        line-height: 32px;
                        font-style: normal;
                        font-family: Inter;
                        color: ${secondaryColor};
                    }
                }

                &_btn {
                    gap: 10px;
                    display: flex;
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 19px;
                    border-radius: 4px;
                    padding: 19px 16px;
                    font-family: Inter;
                    font-style: normal;
                    align-items: center;
                    background: ${primaryColor};
                }
            }

            &_dataTable {
                .viewClient_allInvoices_table_btns {
                    gap: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                    button {
                        color: #64748b;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 17px;
                        font-style: normal;
                        font-family: Inter;
                        border-radius: 4px;
                        background: #e7eaee;
                    }

                    button:last-child {
                        color: #FFFFFF;
                        background: ${primaryColor};
                    }
                }
            }
        }
    }
`

export const StyledDeleteContent = styled.div`
    padding: 20px 5px;
    text-align: center;

    .delete-icon {
        width: auto;
        height: auto;
        margin-bottom: 24px;
    }

    .text {
        text-align: center;
        margin-bottom: 24px;

        h3 {
            margin: 0;
            font-size: 24px;
            font-weight: 500;
            line-height: 40px;
            font-family: Inter;
            margin-bottom: 12px;
            color: ${secondaryColor};
        }

        p {
            margin: 0;
            color: #9CA3AF;
            font-size: 16px;
            line-height: 24px;
            font-family: Inter;
        }
    }

    .btn-container {
        gap: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            font-size: 18px;
            font-weight: 500;
            font-family: Inter;
        }

        .cancel-btn {
            width: 172px;
            height: 44px;
            color: #64748B;
            border-radius: 5px;
            background: #E7EAEE;
        }

        .delete-btn {
            width: 172px;
            height: 44px;
            color: #FFFFFF;
            border-radius: 5px;
            background: #FF4A55;
        }
    }
`