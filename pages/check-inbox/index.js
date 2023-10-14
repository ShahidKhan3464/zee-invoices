import Link from 'next/link';
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
                            alt='message-box'
                            src='/images/message-box.svg'
                        />
                        <h2>Check your inbox</h2>
                        <p>
                            We have sent the instructions for resetting your password to <span style={{ color: secondaryColor }}>example@gmail.com</span>
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

                    <div className="content_bottom">
                        <div className='login'>
                            <span>Remember the password?</span>
                            <Link href="/login" replace={false}>Login</Link>
                        </div>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default Index