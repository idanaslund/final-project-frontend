import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { Reviews, ReviewInfo, TimePosted, RestaurantName, ReviewContainer, FlexContainer } from '../theme/styles'
import { MarginSection, BackButton, GetInspiredButton } from '../theme/reusable'

import { API_URL } from 'utils/urls'

const ReviewList = () => {
  const [reviews, setReviews] = useState([])
  const accessToken = useSelector((store) => store.user.accessToken)

  const navigate = useNavigate()

  const onBackButtonClick = () =>{
    navigate(-1)
  } 

  const onHomeButtonClick = () => {
    navigate('/')
  }

  useEffect(() => {
    if (accessToken) {
      fetch(API_URL('reviews'), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        Authorization: accessToken }
      }) 
      .then(res => res.json())
      .then(setReviews)
      .catch(error => console.error(error))}
  }, [accessToken])

  return (

    <MarginSection>
      <FlexContainer>
      {reviews.map(singleReview => (
        <ReviewContainer key={singleReview._id}>
          <RestaurantName>{singleReview.restaurant}</RestaurantName>
         
          <Reviews>
            <p>{singleReview.review}</p>
          </Reviews>
         
           <TimePosted>
            {formatDistance(new Date(singleReview.createdAt), Date.now(), {
              addSuffix: true,
            })}
          </TimePosted>
          <ReviewInfo>Reviewed by: {singleReview.author}</ReviewInfo>
          
        

        </ReviewContainer>
      ))}
      </FlexContainer>
       <BackButton type="button" onClick={onBackButtonClick}>Go back</BackButton>
       <GetInspiredButton type="button" onClick={onHomeButtonClick}>Pick restaurant</GetInspiredButton>
    </MarginSection>

  )

}

export default ReviewList