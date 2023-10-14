import React from 'react';
import Footer from '@/footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { StyledBox, PrimaryButton } from 'styles/global';

const Index = () => {
    const route = useRouter()

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <Image
                            width={46}
                            height={70}
                            alt='success-keys'
                            src='/images/success-keys.svg'
                        />
                        <h2>Password Changed</h2>
                        <p>
                            Your Password has been changed successfully.
                        </p>
                    </div>

                    <div className="btn-container" style={{ marginTop: '60px' }}>
                        <PrimaryButton
                            type='button'
                            onClick={() => route.push('/login')}
                        >
                            <span>Go to login</span>
                        </PrimaryButton>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default Index