import styled from "styled-components";
import { primaryColor, secondaryColor } from "styles/global";

export const StyledSidebarContainer = styled.aside`
    top: 0;
    bottom: 0;
    width: 240px;
    position: fixed;
    min-height: 100vh;
    padding: 24px 16px;
    background: #FFFFFF;
    transition: all 0.2s;
    left: ${props => props.sidebarVisibal ? '0' : '-240px'};

    .sidebarContainer_logo {
        width: 112px;
        height: 45px;
        margin: auto;

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }


    .sidebarContainer_menu {
        margin-top: 50px;

        ul {
            margin: 0;
            padding: 0;
            list-style-type: none;

            li {
                margin-bottom: 16px;

                .active {
                    color: ${primaryColor};
                    background: rgba(63, 77, 225, 0.2);

                    svg path {
                        fill: ${primaryColor};
                    }

                    .menu-text {
                        color: ${primaryColor};
                    }
                }

                a {
                    gap: 8px;
                    height: 46px;
                    display: flex;
                    color: #F9FAFB;
                    border-radius: 4px;
                    padding-left: 36px;
                    align-items: center;
                    background: #FAFAFA;

                    span:first-child {
                        width: 20px;
                        height: 20px;
                    }

                    &:hover {
                        color: ${primaryColor};
                        background: rgba(63, 77, 225, 0.2);

                        svg path {
                            fill: ${primaryColor};
                        }

                        .menu-text {
                            color: ${primaryColor};
                        }
                    }

                    .menu-text {
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 17px;
                        font-style: normal;
                        font-family: Inter;
                        color: ${secondaryColor};
                    }
                }    
            }
        }    
    }
`