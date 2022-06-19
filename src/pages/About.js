import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AboutContainer } from '../theme/styles'
import { MarginSection, BackButton, SecondHeader, LongerTexts, ParagraphLInks } from '../theme/reusable'

const About = () => {

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
      }

    return(
            <MarginSection>
                <SecondHeader>About us</SecondHeader>
                <AboutContainer>

                    <LongerTexts>"This is where we can write a short text about us."</LongerTexts>
                    <a href="https://github.com/joannalodell19" rel="link to linkedin" target="_blank">
                        <h4> – Joanna Lodell</h4>
                    </a>
                </AboutContainer>
                <AboutContainer>
                    <LongerTexts>"This is where we can write a short text about us."</LongerTexts>
                    <a href="https://github.com/emmajosefina" rel="link to linkedin" target="_blank">
                        <h4> – Emma Lindell</h4>
                    </a>
                </AboutContainer>
                <AboutContainer>
                    <LongerTexts>"I am a frontend developer with five years experience in social work. 
                        I am a skilled communicator and teamplayer who is always eager to learn."</LongerTexts>
                    <a href="https://github.com/idanaslund" rel="link to linkedin" target="_blank">
                        <h4> – Ida Näslund</h4>
                    </a>

                </AboutContainer>

                <SecondHeader>foodiefinder was born in June 2022…</SecondHeader>
                <AboutContainer>

<LongerTexts>and is our fullstack final project from Technigo Boot Camp 2022.<span role="sparkle" aria-label="sparkle emoji">✨</span> </LongerTexts>

<LongerTexts>With this web app users can find inspiration for their next restaurant visit and share reviews with their friends. The database is created by ourselves and contains 50 restaurants in Stockholm.</LongerTexts>

<SecondHeader>Tech stack</SecondHeader>
<LongerTexts>We created foodiefinder using React, Styled components, Redux, React Router, Animations, Netlify and Progressive Web App for frontend, and Node and MongoDB for backend. Other tools we used during this time was Figma, Canva, and three creative and problem solving brains. <span role="brain" aria-label="brain emoji">🧠</span></LongerTexts>

<SecondHeader>Thanks thanks and thanks</SecondHeader>
<LongerTexts>Last but not least, we would like to give a huge thank you for all the support to Max (Joannas soon to be husband) for being such a great support during this time. He helped us when we got stuck and taught us many things we will take with us in our journey as developers. Also, Sara Carlstein is a great person who helped us a lot. We are beyond grateful for all the support.</LongerTexts>

<SecondHeader>Take a look at all our lines of code</SecondHeader>
<LongerTexts>Github repos: <a href="https://github.com/idanaslund/final-project-frontend"><ParagraphLInks>Frontend</ParagraphLInks></a><span> and </span><a href="https://github.com/idanaslund/final-project-backend"><ParagraphLInks>Backend</ParagraphLInks></a></LongerTexts>


                </AboutContainer>

                <BackButton
                type="button" onClick={onBackButtonClick}
                >Go back</BackButton>
            </MarginSection>
    )
}

export default About