import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { API_URL, REVIEWS } from 'utils/urls'

import ReviewForm from 'components/ReviewForm'
import ReviewList from 'components/ReviewList'

export const ReviewComponent = ({ reviews, updateLikes }) => {
  const [newReview, setNewReview] = useState('')
  const [counter, setCounter] = useState(0)

  const accessToken = useSelector((store) => store.user.accessToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])


  const handleNewReviewChange = (event) => {
    setNewReview(event.target.value)
    setCounter(event.target.value.length)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        Authorization : accessToken
      },
      body: JSON.stringify({
        'review': newReview
      })
    }

    if (accessToken) {
      fetch(API_URL(REVIEWS), options)
        .then(res => res.json())
        .then(() => {
          // fetchReviews()
          setNewReview(newReview.review)
          setCounter(0)
        })
    }
  }

  return (
    <div>
      <ReviewForm 
        newReview={newReview}
        setNewReview={setNewReview}
        onNewReviewChange={handleNewReviewChange}
        onFormSubmit={onFormSubmit}
        counter={counter}
      />
      {/* <ReviewList
        reviews={reviews}
        updateLikes={updateLikes} /> */}

    </div>
  )
}