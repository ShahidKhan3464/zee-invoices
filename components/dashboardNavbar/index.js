import React from 'react';
import Image from 'next/image';
import { StyledNavbar } from './style';

const Index = ({ sidebarVisibal, setSidebarVisibal }) => {

    return (
        <StyledNavbar>
            <button
                type='button'
                className='hamburger-btn'
                onClick={() => setSidebarVisibal(!sidebarVisibal)}
            >
                <Image
                    width={20}
                    height={20}
                    alt="hamburger"
                    src="/images/hamburger.svg"
                />
            </button>
            <div className='right'>
                <div className='avatar'>
                    <Image
                        width={32}
                        height={32}
                        alt="avatar"
                        src="/images/avatar.png"
                    />
                </div>
                <p className='name-text'>Marci Fumons</p>
            </div>
        </StyledNavbar>
    )
}

export default Index