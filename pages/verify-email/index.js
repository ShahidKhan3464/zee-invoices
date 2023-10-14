import Footer from '@/footer';
import Image from 'next/image';
import React, { useState } from 'react';
import { StyledBox, PrimaryButton, secondaryColor } from 'styles/global';

const Index = () => {
    const [loading, setLoading] = useState(false)

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <Image
                            width={46}
                            height={70}
                            alt='email-box-verify'
                            src='/images/email-box-verify.svg'
                        />
                        <h2>Verify your Email</h2>
                        <p>
                            Thanks for signing up! There's one quick step left. Please verify your email. We have sent a verification email to <span style={{ color: secondaryColor }}>example@gmail.com</span>
                        </p>
                    </div>

                    <div className="content_resend-email">
                        <p>Didn’t receive the email? Check spam or </p>
                        <PrimaryButton
                            type='button'
                            disabled={loading}
                        >
                            {loading ? (
                                <CircularProgress size={22} color='inherit' />
                            ) : (
                                <span>Resend Email</span>
                            )}
                        </PrimaryButton>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default Index