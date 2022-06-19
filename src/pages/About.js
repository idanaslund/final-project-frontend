import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AboutContainer } from '../theme/styles'
import { MarginSection, BackButton } from '../theme/reusable'

const About = () => {

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
      }

    return(
            <MarginSection>
                <h3>About us</h3>
                <AboutContainer>

                    <p>"This is where we can write a short text about us."</p>
                    <a href="https://github.com/joannalodell19" rel="link to linkedin" target="_blank">
                        <h4> -Joanna Lodell</h4>
                    </a>
                </AboutContainer>
                <AboutContainer>
                    <p>"This is where we can write a short text about us."</p>
                    <a href="https://github.com/emmajosefina" rel="link to linkedin" target="_blank">
                        <h4> -Emma Lindell</h4>
                    </a>
                </AboutContainer>
                <AboutContainer>
                    <p>"I am a frontend developer with five years experience in social work. 
                        I am a skilled communicator and teamplayer who is always eager to learn."</p>
                    <a href="https://github.com/idanaslund" rel="link to linkedin" target="_blank">
                        <h4> -Ida Näslund</h4>
                    </a>

                </AboutContainer>

                <h3>About this project</h3>
                <AboutContainer>
                    <p>Some information about our final project here.</p>
                </AboutContainer>

                <BackButton
                type="button" onClick={onBackButtonClick}
                >Go back</BackButton>
            </MarginSection>
    )
}

export default About