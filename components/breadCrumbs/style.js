import styled from "styled-components";
import { secondaryColor } from "styles/global";
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const StyledBreadcrumbs = styled(Breadcrumbs)`
    .MuiBreadcrumbs-ol {
        gap: 8px;

        .MuiBreadcrumbs-separator {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            color: ${secondaryColor};
        } 

        .MuiBreadcrumbs-li {
            a, span {
                font-size: 24px;
                font-weight: 500;
                line-height: 32px;
                font-style: normal;
                font-family: Inter;

                @media screen and (max-width: 520px) {
                    font-size: 12px;
                }
            }
    
            a {
                color: ${secondaryColor};
                &:hover {
                    text-decoration: underline;
                }
            }
    
            span {
                color: #6B7280;
            }
        } 
    }      
`