import React from 'react'
import { Paragraph } from 'theme/reusable'
import { FooterStyling } from 'theme/styles'

const Footer = () => {
    return(
        <FooterStyling>
            <div className='footerContainer'>
                <Paragraph>Technigo Boot Camp Spring 2022<br/>Made by: Joanna Lodell, Emma Lindell & Ida Näslund</Paragraph>
            </div>
        </FooterStyling>
    )

}

export default Footer