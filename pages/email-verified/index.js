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
                            alt='email-box-verified'
                            src='/images/email-box-verified.svg'
                        />
                        <h2>Your email has been verified successfully</h2>
                        <p>
                            Thanks for verifying your email, Last name!
                        </p>
                    </div>

                    <div className="btn-container" style={{ marginTop: '60px' }}>
                        <PrimaryButton
                            type='button'
                            onClick={() => route.push('/login')}
                        >
                            <span>Continue</span>
                        </PrimaryButton>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default Index