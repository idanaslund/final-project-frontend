import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { Reviews, StyledReviewBox, ReviewInfo, TimePosted, RestaurantName, LikeButtonArea, ReviewContainer } from '../theme/styles'
import { MarginSection, BackButton } from '../theme/reusable'
import heart from '../assets/heart.svg'

const ReviewList = () => {
  const [reviews, setReviews] = useState([])
  const accessToken = useSelector((store) => store.user.accessToken)

  const navigate = useNavigate()

  const onBackButtonClick = () => navigate(-1)

  useEffect(() => {
    if (accessToken) {
      fetch("http://localhost:8080/reviews/", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        Authorization: accessToken}
      }) 
      .then(res => res.json())
      .then(reviews => setReviews(reviews))
      .catch(error => console.error(error))
    }
    console.log(reviews)
  }, [accessToken])

  console.log('reviews', reviews)

const onLike = (singleReviewId) => {
  fetch(`http://localhost:8080/reviews/${singleReviewId}/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
    Authorization: accessToken},
    body: ''
  }).then(() => updateLikes(singleReviewId))
};

// Function for updating likes
const updateLikes = (singleReviewId) => {
  const updatedReview = reviews.map(review => {
    if (review._id === singleReviewId) {
      review.like += 1;
    }
    return review;
  })
  setReviews(updatedReview) // The state is changed with the updated thoughts, based on new number of likes
};


  return (

    <MarginSection>
      {reviews.map(singleReview => (
        <ReviewContainer key={singleReview._id} review={singleReview} onLike={onLike}>
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
              <img src={heart} alt="heart" height="30px" onClick={() => onLike(singleReview._id)}/>
              <span>x {singleReview.like}</span>
            </LikeButtonArea>  

        </ReviewContainer>
      ))}
       <BackButton type="button" onClick={onBackButtonClick}>Go back</BackButton>
    </MarginSection>

  )

}

export default ReviewList