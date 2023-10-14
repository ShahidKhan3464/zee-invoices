import styled from "styled-components";
import { secondaryColor } from "styles/global";

export const StyledModalContent = styled.div`
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