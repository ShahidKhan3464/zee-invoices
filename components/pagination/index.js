import React from 'react';
import { Pagination } from 'antd';
import { StyledPaginationContainer } from './style';

const Index = ({ total, pageSize, currentPage, prevPage, nextPage, onPageChange }) => {
    const isLastPage = currentPage === Math.ceil(total / pageSize)

    return (
        <StyledPaginationContainer>
            <div
                onClick={prevPage}
                className={`control-btn ${currentPage === 1 ? 'disabled' : ''}`}
            >
                <img src='images/arrow-left.svg' alt='arrow-left' />
                <button type='button'>Previous</button>
            </div>
            <Pagination
                total={total}
                pageSize={pageSize}
                current={currentPage}
                onChange={onPageChange}
            />
            <div
                onClick={nextPage}
                className={`control-btn ${isLastPage ? 'disabled' : ''}`}
            >
                <button type='button'>Next</button>
                <img src='images/arrow-right.svg' alt='arrow-right' />
            </div>
        </StyledPaginationContainer>
    )
}

export default Index