import React from 'react';
import Image from 'next/image';
import { FooterStyleContainer } from './style';

const Index = () => {

    return (
        <FooterStyleContainer>
            <div className='firstFooter'>
                <div className='firstFooter_main container'>
                    <div className='firstFooter_main_logo'>
                        <Image
                            width={80}
                            height={30}
                            alt='footer-logo'
                            src='/images/footer-logo.svg'
                        />
                    </div>
                    <div className='firstFooter_main_socialIcons'>
                        <Image
                            width={27}
                            height={27}
                            alt='twiterIcon.svg'
                            src='/images/twiterIcon.svg'
                        />
                        <Image
                            width={27}
                            height={27}
                            alt='facebookIcon.svg'
                            src='/images/facebookIcon.svg'
                        />
                        <Image
                            width={27}
                            height={27}
                            alt='instagramIcon.svg'
                            src='/images/InstagramIcon.svg'
                        />
                    </div>
                </div>
            </div>
            <div className='secondFooter'>
                <div className='secondFooter_main container'>
                    <div className='secondFooter_main_links'>
                        <p>Terms and Conditions</p>
                        <p>Invoice Guide</p>
                        <p>Help</p>
                    </div>
                    <h6>© Copyright 2022, All Rights Reserved by ZAPTA Technologies</h6>
                </div>
            </div>
        </FooterStyleContainer>
    )
}

export default Index