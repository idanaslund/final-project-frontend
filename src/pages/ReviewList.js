import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { Reviews, StyledReviewBox, ReviewInfo, TimePosted, RestaurantName, ReviewContainer } from '../theme/styles'
import { MarginSection, BackButton } from '../theme/reusable'

import { API_URL } from 'utils/urls'

const ReviewList = () => {
  const [reviews, setReviews] = useState([])
  const accessToken = useSelector((store) => store.user.accessToken)

  const navigate = useNavigate()

  const onBackButtonClick = () => navigate(-1)

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
      {reviews.map(singleReview => (
        <ReviewContainer key={singleReview._id}>
          <RestaurantName>{singleReview.restaurant}</RestaurantName>
          <StyledReviewBox>
          <Reviews>
            <p>{singleReview.review}</p>
          </Reviews>
          </StyledReviewBox>
           <TimePosted>
            {formatDistance(new Date(singleReview.createdAt), Date.now(), {
              addSuffix: true,
            })}
          </TimePosted>
          <ReviewInfo>Reviewed by: {singleReview.author}</ReviewInfo>
          
        

        </ReviewContainer>
      ))}
       <BackButton type="button" onClick={onBackButtonClick}>Go back</BackButton>
    </MarginSection>

  )

}

export default ReviewList