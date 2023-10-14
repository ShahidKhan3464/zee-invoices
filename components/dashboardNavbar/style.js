import styled from "styled-components";
import { secondaryColor } from "styles/global";

export const StyledNavbar = styled.div`
    display: flex;
    padding: 20px 24px;
    align-items: center;
    background: #FFFFFF;
    justify-content: space-between;

    .hamburger-btn {
        padding: 6px;
        border: none;
        outline: none;
        cursor: pointer;
        background: #F7F7F8;
        border-radius: 20px;
    }

    .right {
        gap: 8px;
        display: flex;
        align-items: center;

        .name-text {
            margin: 0;
            font-size: 14px;
            font-weight: 500;
            line-height: 17px;
            font-family: Inter;
            font-style: normal;
            color: ${secondaryColor};
        }
    }
`