import React from 'react';
import { StyledBreadcrumbs } from './style';

const Index = ({ children }) => {

    return (
        <StyledBreadcrumbs aria-label="breadcrumb">
            {children}
        </StyledBreadcrumbs>
    )
}

export default Index