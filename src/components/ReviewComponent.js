import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { API_LIKES_URL, API_URL, REVIEWS } from 'utils/urls'

import ReviewForm from 'components/ReviewForm'
import ReviewList from 'components/ReviewList'

export const ReviewComponent = () => {
  const [reviewList, setReviewList] = useState([])
  const [newReview, setNewReview] = useState('')
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0)

  const accessToken = useSelector((store) => store.user.accessToken)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (accessToken) {
  //     fetchReviews()
  //   }
  // }, [accessToken])

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])

  // const fetchReviews = () => {
  //   setLoading(true)
  //   fetch(API_URL(REVIEWS))
  //     .then(res => res.json())
  //     .then(data => setReviewList(data))
  //     .catch(error => console.error(error))
  //     .finally(() => setLoading(false))
  // }

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
          setNewReview('')
          setCounter(0)
        })
    }
  }

  // const handleLikesIncrease = (singleReviewId) => {
    
  //   const options = {
  //     method: 'POST'
  //   }

  //   if (accessToken) {

  //     fetch(API_LIKES_URL(singleReviewId), options)
  //     .then((res) => res.json())
  //     .then(data => {
  //       fetchReviews(data)
  //     })

  //   }
  // }

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
        loading={loading}
        reviewList={reviewList}
        handleLikesIncrease={handleLikesIncrease}
      /> */}

    </div>
  )
}