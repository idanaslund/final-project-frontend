import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { Reviews, StyledReviewBox, ReviewInfo, TimePosted, RestaurantName, LikeButtonArea, ReviewContainer } from '../theme/styles'
import { MarginSection, BackButton } from '../theme/reusable'
import heart from '../assets/heart.svg'

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
        Authorization: accessToken}
      }) 
      .then(res => res.json())
      .then(reviews => setReviews(reviews))
      .catch(error => console.error(error))
    }
  }, [accessToken])

  console.log('reviews', reviews)

const onLike = (id) => {
  fetch(`https://restaurants-backend-database.herokuapp.com/reviews/${id}/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
    Authorization: accessToken},
    body: ''
  }).then(() => updateLikes(id))
};

// Function for updating likes
const updateLikes = (id) => {
  const updatedReview = reviews.map(review => {
    if (review._id === id) {
      review.like += 1
    }
    return review
  })
  setReviews(updatedReview) 
}


  return (

    <MarginSection>
      {reviews.map(singleReview => (
        <ReviewContainer key={singleReview._id} review={singleReview}>
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
          
            <LikeButtonArea>
              <img src={heart} alt="heart" height="30px" onClick={onLike(singleReview._id)}/>
              <span>x {singleReview.like}</span>
            </LikeButtonArea>  

        </ReviewContainer>
      ))}
       <BackButton type="button" onClick={onBackButtonClick}>Go back</BackButton>
    </MarginSection>

  )

}

export default ReviewList