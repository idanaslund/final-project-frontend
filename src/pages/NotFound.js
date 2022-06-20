import React from 'react'
import { useNavigate } from "react-router-dom"
import Lottie from 'react-lottie'
import animationData from 'lotties/404-lottie'
import { MarginSection, GetInspiredButton} from 'theme/reusable'
import { NotFoundContainer, NotFoundHeader, BackToHomePageButton  } from 'theme/styles'

const NotFound = () => {

    const navigate = useNavigate()

    const onGetInspiredButtonClick = () => {
      navigate('/reviews')
    }

    const onHomeButtonClick = () => {
      navigate('/')
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }


    return(
        <MarginSection>
           <NotFoundContainer>       
            <NotFoundHeader>404 – Page not found</NotFoundHeader>

            <BackToHomePageButton onClick={onHomeButtonClick}>
              Back to homepage
            </BackToHomePageButton>

            <GetInspiredButton onClick={onGetInspiredButtonClick}>
              Get inspired
            </GetInspiredButton>

              <Lottie 
            options={defaultOptions}
              height={280}
              width={280}
            />

          </NotFoundContainer>

        </MarginSection>
        
    )
}
export default NotFound