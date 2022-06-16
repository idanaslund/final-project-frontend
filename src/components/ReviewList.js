import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistance } from 'date-fns'

import user from 'reducers/user'

const ReviewList = () => {
  const [reviews, setReviews] = useState([])

  const accessToken = useSelector((store) => store.user.accessToken)

  const dispatch = useDispatch()

  // Fetching GET reviews if accesstoken
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
  }, [accessToken])

  // console.log('reviews', reviews)

// Post like to API
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

    <section>
      {reviews.map(singleReview => (
        <article key={singleReview._id} review={singleReview} onLike={onLike}>
          <p>{singleReview.review}</p>
          <div>
            <div>
            <button 
                onClick={() => onLike(singleReview._id)}>
          
              <span>x {singleReview.like}</span></button>
            </div>
          </div>

          <p>
            {formatDistance(new Date(singleReview.createdAt), Date.now(), {
              addSuffix: true,
            })}
          </p>

        </article>
      ))}
    </section>

  )

}

export default ReviewList