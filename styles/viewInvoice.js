import styled from "styled-components";

export const StyledViewInvoice = styled.div`
    padding: 24px 20px 0;

    .viewInvoice {
        gap: 20px;
        display: grid;
        margin-top: 24px;
        grid-template-columns: auto 1fr;

        &_invoice-builder {
            padding: 20px 24px;
            background: #FFFFFF;
            border-top: 4px solid #0066B3;

            &_top {
                display: flex;
                align-item: center;
                justify-content: space-between;

                .invoice-no {
                    gap: 7px;
                    display: flex;
                    align-items: center;

                    p {
                        margin: 0;
                        color: #202020;
                        font-size: 10px;
                        font-weight: 500;
                        line-height: 12px;
                        font-family: Inter;
                        font-style: normal;
                    }

                    span {
                        color: #4F4F4F;
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 14px;
                        font-family: Inter;
                        font-style: normal;
                        letter-spacing: -0.02em;
                    }
                }
            }

            &_boxes {
                gap: 20px;
                display: grid;
                grid-template-columns: 1fr 1fr;

                &_from, &_to {
                    margin-top: 25px;
                    padding: 12px 24px;
                    border-radius: 4px;
                    background: #FFFFFF;
                    border: 1px solid #EEEEEE;

                    p, h2 {
                        margin: 0;
                    }

                    .from, .to {
                        color: #767676;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 16px;
                        font-family: Inter;
                        font-style: normal;
                        margin-bottom: 14px;
                    }

                    .location {
                        color: #202020;
                        font-size: 12px;
                        font-weight: 700;
                        line-height: 14px;
                        font-family: Inter;
                        font-style: normal;
                        margin-bottom: 30px;
                    }

                    .address, .email, .phone {
                        color: #444444;
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 14px;
                        font-family: Inter;
                        font-style: normal;
                        margin-bottom: 5px;
                    }
                }
            }

            &_date {
                display: flex;
                margin: 20px 0;
                align-items: center;
                justify-content: space-between;

                >div {
                    gap: 8px;
                    display: flex;
                    align-items: center;

                    p {
                        margin: 0;
                        color: #202020;
                        font-size: 10px;
                        font-weight: 600;
                        line-height: 12px;
                        font-family: Inter;
                        font-style: normal;
                    }

                    span {
                        color: #4F4F4F;
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 14px;
                        font-family: Inter;
                        font-style: normal;
                        letter-spacing: -0.02em;
                    }
                }
            }

            &_table {
                table {
                    width: 100%;
                    borde-collapse: inherit;

                    thead {
                        border-radius: 2px;
                        background: #0066B3;

                        th {
                            color: #FFFFFF;
                            font-size: 12px;
                            font-weight: 600;
                            line-height: 14px;
                            padding: 8px 20px;
                            font-family: Inter;
                            font-style: normal;
                        }
                    }

                    tbody {

                        tr {
                            border-bottom: 1px solid #E0E0E0;
                        }

                        td {
                            color: #202020;
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 16px;
                            padding: 8px 20px;
                            text-align: center;
                            font-family: Inter;
                            font-style: normal;
                            letter-spacing: -0.5px;    
                        }

                        td:last-child {
                            font-weight: 500;
                        }

                        .items-cell {
                            text-align: left;
                            h3 {
                                margin: 0;
                                color: #202020;
                                font-size: 12px;
                                font-weight: 500;
                                line-height: 14px;
                                font-family: Inter;
                                font-style: normal;
                                letter-spacing: -0.5px;
                            }

                            p {
                                margin: 0;
                                color: #4F4F4F;
                                margin-top: 4px;
                                font-size: 10px;
                                font-weight: 300;
                                line-height: 12px;
                                font-family: Inter;
                                font-style: normal;
                            }
                        }
                    }
                }
            }

            &_summary {
                width: 100%;
                float: right;
                max-width: 240px;
                margin-top: 47px;
                border-radius: 3px;
                background: #FFFFFF;
                margin-bottom: 112px;
                border: 1px solid #E0E0E0;

                .title {
                    color: #FFFFFF;
                    padding: 8px 0;
                    text-align: center;
                    background: #0066B3;
                    border-radius: 2px 2px 0px 0px;

                    h2 {
                        margin: 0;
                        font-size: 12px;
                        font-weight: 700;
                        line-height: 14px;
                        font-style: normal;
                        font-family: Inter;
                    }
                }

                .detail {
                    gap: 24px;
                    display: flex;
                    padding: 16px 12px;
                    flex-direction: column;

                    div:last-child {
                        padding: 0;
                        border: none;
                    }

                    >div {
                        display: flex;
                        align-items: center;
                        padding-bottom: 10px;
                        justify-content: space-between;
                        border-bottom: 1px solid #E0E0E0;

                        p {
                            margin: 0;
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 14px;
                            font-style: normal;
                            font-family: Inter;
                            letter-spacing: -0.02em;
                        }

                        p:first-child {
                            color: #767676;
                        }

                        p:last-child {
                            color: #202020;

                            span {
                                font-weight: 600;
                            }
                        }
                    }
                }
            }

            &_note {
                width: 100%;
                float: left;
                border-top: 1px solid #E0E0E0;
                
                p {
                    margin: 0;
                    color: #4F4F4F;
                    font-size: 10px;
                    font-weight: 300;
                    padding-top: 8px;
                    line-height: 14px;
                    font-style: normal;
                    font-family: Inter;
                    letter-spacing: -0.5px;
                }
            }
        }

        &_btn-container {
            gap: 16px;
            display: flex;
            height: 232px;
            max-width: 372px;
            padding: 40px 24px;
            border-radius: 4px;
            background: #FFFFFF;
            flex-direction: column;
            border-bottom: 1px solid #E7EAEE;

            button {
                height: 40px;
                font-size: 16px;
                font-weight: 500;
                line-height: 19px;
                font-family: Inter;
                font-style: normal;
                border-radius: 4px;
            }
        }
    }
`