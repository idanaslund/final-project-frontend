import React from 'react'
import Lottie from 'react-lottie'
import animationData from 'lotties/404-lottie'
import { MarginSection, GetInspiredButton} from 'theme/reusable'
import { NotFoundContainer, NotFoundHeader, BackToHomePageButton  } from 'theme/styles'

const NotFound = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };



    return(
        <MarginSection>
           <NotFoundContainer>       
            <NotFoundHeader>404 – Page not found</NotFoundHeader>

<BackToHomePageButton>Back to homepage</BackToHomePageButton>
<GetInspiredButton>Get inspired</GetInspiredButton>

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