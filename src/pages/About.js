import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AboutContainer } from '../theme/styles'
import { MarginSection, BackButton, SecondHeader, ParagraphLInks, BoldParagraphs } from '../theme/reusable'
import { EmmaImage, JoannaImage, IdaImage, AboutProfileTexts, LongerTexts} from '../theme/styles'

const About = () => {

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
      }

    return(
            <MarginSection>
                <SecondHeader>About us</SecondHeader>
                <AboutContainer>
                <JoannaImage src="https://i.postimg.cc/Hn9qF5c0/1642405918592.jpg" height="110px" />
                <AboutProfileTexts>I’m a marketing specialist, former production manager, event planner and an aspiring frontend developer with a passion for getting things done.
</AboutProfileTexts>
                    <a href="https://github.com/joannalodell19" target="_blank" rel="noopener noreferrer" alt="link to github">
                        <BoldParagraphs> – Joanna Lodell</BoldParagraphs>
                    </a>
                </AboutContainer>
                <AboutContainer>
                    <EmmaImage src="https://i.postimg.cc/JnntSk8V/1588602797626-1.jpg" height="110px" />
                    <AboutProfileTexts>I'm a Frontend Developer with five years experience of working with SEO, communication and marketing. Code has been a friend of mine for years, remembering feeling very cool creating my own Lunarstorm profile in HTML 2007.</AboutProfileTexts>
                    <a href="https://github.com/emmajosefina" rel="noopener noreferrer" alt="link to github" target="_blank">
                        <BoldParagraphs> – Emma Lindell</BoldParagraphs>
                    </a>
                </AboutContainer>
                <AboutContainer>
                <IdaImage src="https://i.postimg.cc/3wMH4KTv/1650215401175.jpg" height="110px" />
                    <AboutProfileTexts>I am a frontend developer with five years experience in social work. 
                        I am a skilled communicator and teamplayer who is always eager to learn.</AboutProfileTexts>
                    <a href="https://github.com/idanaslund" rel="noopener noreferrer" alt="link to github" target="_blank">
                        <BoldParagraphs> – Ida Näslund</BoldParagraphs>
                    </a>

                </AboutContainer>

                <SecondHeader>foodiefinder was born in June 2022…</SecondHeader>
                <AboutContainer>

<LongerTexts>and is our fullstack final project from Technigo Boot Camp 2022.<span role="img" aria-label="sparkle emoji">✨</span> </LongerTexts>

<LongerTexts>With this web app users can find inspiration for their next restaurant visit and share reviews with their friends. The database is created by ourselves and contains 50 restaurants in Stockholm.</LongerTexts>

<SecondHeader>Tech stack</SecondHeader>
<LongerTexts>We created foodiefinder using React, Styled components, Redux, React Router, Animations, Netlify and Progressive Web App for frontend, and Node and MongoDB for backend. Other tools we used during this time was Figma, Canva, and three creative and problem solving brains. <span role="img" aria-label="brain emoji">🧠</span></LongerTexts>

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