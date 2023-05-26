import React from 'react';
import { FooterStyleContainer } from './style';

const Index = () => {

    return (
        <FooterStyleContainer>
            <div className='firstFooter'>
                <div className='firstFooter_main container'>
                    <div className='firstFooter_main_logo'>
                        <img src='images/FooterLogo.svg' alt='FooterLogo.svg' />
                    </div>
                    <div className='firstFooter_main_socialIcons'>
                        <img src='images/twiterIcon.svg' alt='twiterIcon.svg' />
                        <img src='images/facebookIcon.svg' alt='facebookIcon.svg' />
                        <img src='images/InstagramIcon.svg' alt='InstagramIcon.svg' />
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