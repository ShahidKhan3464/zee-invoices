import styled from "styled-components";
import { primaryColor } from "styles/global";

export const StyledPaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .disabled {
        background: #E9EEFF;
        cursor: not-allowed !important;
        
        button {
            cursor: not-allowed !important;
        }
    }

    .control-btn {
        gap: 8px;
        display: flex;
        cursor: pointer;
        padding: 7px 14px;
        border-radius: 4px;
        align-items: center;
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

        img {
            width: 20px;
            height: 20px;
        }

        button {
            padding: 0;
            border: none;
            outline: none;
            color: #374151;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            font-family: Inter;
            font-style: normal;
            background: transparent;
        }
    }

    .ant-pagination {
        .ant-pagination-prev, .ant-pagination-next {
            display: none;
        }

        .ant-pagination-item {
            outline: none;
            font-size: 14px;
            font-weight: 500;
            font-family: Inter;
            font-style: normal;
        }

        .ant-pagination-item-active {
            border: none;
            border-radius: 8px;
            background: #E9EEFF;

            a {
                color: ${primaryColor};
            }
        }
    }
`